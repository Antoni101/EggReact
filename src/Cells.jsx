import { useState, useEffect, useRef } from "react";

export default function Cell({ setEggs, eggs }) {
  const [active, setActive] = useState(false);
  const [fill, setFill] = useState(0);

  const value = 10;
  const rate = 5;
  const speed = 500;

  const cellInterval = useRef(null);

  const start = () => {
  const selected = eggs.find(e => e.selected && e.amount > 0);
  if (!selected || active) return;
    setEggs(prev =>
      prev.map(egg =>
        egg.id === selected.id
          ? { ...egg, amount: egg.amount - 1 }
          : egg
      )
    );

    setActive(true);
    cellInterval.current = setInterval(() => {
      setFill(prev => prev + rate);
    }, speed);
  };


  useEffect(() => {
    if (fill >= 100) {
      clearInterval(cellInterval.current);
      cellInterval.current = null;
      setActive(false);
      setFill(0);
      hatch();
    }
  }, [fill]);

  const hatch = () => {
    console.log("HATCHED!");
    // Gonna add more logic here later
  };

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
          backgroundColor: 'lightgreen',
          transform: `translateY(${100 - fill}%)`,
          transition: 'transform 0.3s ease-in-out'
        }}
      />
    </div>
  );
}
