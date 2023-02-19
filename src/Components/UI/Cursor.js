import React, { useEffect, useState } from "react";
import CursorArrow from "./CursorArrow";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 400, y: 400 });
  const onMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX - 15, y: clientY - 15 });
  };
  console.log(mousePosition);
  console.log(mousePosition);
  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  return (
    <div
      className="cursor border-sec dark:border-pri border pointer-events-none flex justify-center items-center  h-[30px] w-[30px] fixed z-20 rounded-full"
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    >
      <div className="bg-sec dark:bg-pri w-[11px] h-[11px] rounded-full"></div>
      <div className="absolute  top-1/2 translate-y-1/2 right-[-7px]">
        <CursorArrow />
      </div>
    </div>
  );
};

export default Cursor;
