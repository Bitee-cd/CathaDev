import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../Context/AppContext";

const Button = ({ title }) => {
  const [push, setPush] = useState(false);
  const { darkMode } = useAppContext();
  const [hover, setHover] = useState(true);

  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      animate={{ duration: 2 }}
      whileHover={{
        delay: 0.5,
        duration: 1,
        backgroundColor: `${darkMode ? "#0C0C0C" : "#E3E3E3"}`,
      }}
      style={{ originX: "left" }}
      className={` flex ${""} items-center relative h-[32px] transition-all  duration-700 rounded-[32px]  hover:cursor-pointer`}
    >
      <motion.div
        animation={{ duration: 1, x: `${hover && 120}` }}
        className={`rounded-full w-8 h-8  ${
          hover && " "
        }    dark:bg-pri bg-black transition-all  duration-700 ease-in-out flex justify-center items-center`}
      >
        <svg
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.426086 0.888885L7.13913 8.547L0.426086 15.1111"
            stroke={!darkMode ? "#0C0C0C" : "#E3E3E3"}
          />
        </svg>
      </motion.div>
      <span
        className={`${hover && "dark:text-pri text-sec"} px-2  text-center`}
      >
        {title}
      </span>
    </motion.div>
  );
};

export default Button;
