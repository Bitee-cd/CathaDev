import React, { useEffect, useState } from "react";
import CursorArrow from "./CursorArrow";
import { motion } from "framer-motion";
import { useAppContext } from "../Context/AppContext";

const Cursor = () => {
  const { cursorVariant } = useAppContext();
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
    <motion.div
      variants={variants}
      animate={cursorVariant}
      className="cursor border-[2px] dark:bg-pri bg-sec hidden lg:block"
    ></motion.div>
  );
};

export default Cursor;
