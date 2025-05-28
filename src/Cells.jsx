import { useState, useEffect, useRef } from "react";

export default function Cell({ setEggs }) {
  const [active, setActive] = useState(false);
  const [fill, setFill] = useState(0);

  const value = 10;
  const rate = 5;
  const speed = 500;

  const cellInterval = useRef(null);

  const start = () => {
    if (!active) {
      setActive(true);
      cellInterval.current = setInterval(() => {
        setFill(prev => prev + rate);
      }, speed);
    }
  };

  useEffect(() => {
    if (fill >= 100) {
      clearInterval(cellInterval.current);
      cellInterval.current = null;
      setActive(false);
      setFill(0);
    }
  }, [fill]);

  return (
    <div
      onClick={start}
      style={{
        position: 'relative',
        overflow: 'hidden'
      }}
      className="
        bg-white border border-2
        w-20 h-20 opacity-40 
        active:transform active:scale-105
        hover:opacity-100 hover:cursor-pointer
        transition duration-150"
    >
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'green',
          transform: `translateY(${100 - fill}%)`,
          transition: 'transform 0.3s ease-in-out'
        }}
      />
    </div>
  );
}
