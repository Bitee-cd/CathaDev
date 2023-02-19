import React, { useEffect, useState } from "react";
import CursorArrow from "./CursorArrow";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ x: 20 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="cursor border-sec dark:border-pri border pointer-events-none flex justify-center items-center  h-[30px] w-[30px] fixed z-20 rounded-full"
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    >
      <motion.div className="bg-sec dark:bg-pri w-[11px] h-[11px] rounded-full"></motion.div>
      <div className="absolute  top-[18px] right-[-5px]">
        <CursorArrow />
      </div>
    </motion.div>
  );
};

export default Cursor;
