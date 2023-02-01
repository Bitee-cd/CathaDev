import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../Context/AppContext";

const Button = ({ title }) => {
  const [push, setPush] = useState(false);
  const { darkMode } = useAppContext();
  return (
    <motion.div
      animate={{ duration: 2 }}
      className={` flex items-center  rounded-[32px] hover:cursor-pointer`}
    >
      <div className="rounded-full w-8 h-8 dark:bg-pri bg-black flex justify-center items-center">
        <svg
          width="8"
          height="16"
          viewBox="0 0 8 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {!darkMode ? (
            <path
              d="M0.426086 0.888885L7.13913 8.547L0.426086 15.1111"
              stroke="#0C0C0C"
            />
          ) : (
            <path
              d="M0.426086 0.888885L7.13913 8.547L0.426086 15.1111"
              stroke="#E3E3E3"
            />
          )}
        </svg>
      </div>
      <span className="px-2 text-center">{title}</span>
    </motion.div>
  );
};

export default Button;
