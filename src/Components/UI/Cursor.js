import React, { useEffect, useState } from "react";
import CursorArrow from "./CursorArrow";
import { motion } from "framer-motion";
import { useAppContext } from "../Context/AppContext";

const Cursor = () => {
  const { cursorVariant, textEnter, textLeave } = useAppContext();
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  return (
    <>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="cursor border-[2px] dark:bg-pri bg-sec hidden lg:block"
      ></motion.div>
      {/* <motion.div
        variants={variants.default}
        animate={cursorVariant}
        className="bg-sec dark:bg-pri w-[11px] fixed h-[11px] rounded-full"
      ></motion.div> */}
      {/* <div className="absolute  top-[18px] right-[-5px]">
        <CursorArrow />
      </div> */}
    </>
  );
};

export default Cursor;
