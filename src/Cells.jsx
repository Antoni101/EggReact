import { useState, useEffect, useRef } from "react";

export default function Cell({ setMoney, setEggs }) {
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

      setMoney(prev => prev + value);
    }
  }, [fill]);

  return (
    <div
      onClick={start}
      style={{
        background: `linear-gradient(to top, green ${fill}%, white ${fill}%)`,
      }}
      className="
        bg-white border border-2
        w-20 h-20 opacity-40 
        active:transform active:scale-105
        hover:opacity-100 hover:cursor-pointer
        transition duration-150"
    ></div>
  );
}
