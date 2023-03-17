import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "../Context/AppContext";
import { Link } from "react-scroll";

const Button = ({ title }) => {
  const [push, setPush] = useState(false);
  const { darkMode } = useAppContext();
  const [hover, setHover] = useState(false);

  return (
    <Link to="contact" smooth={true} duration={1500}>
      <motion.div
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className={`flex ${
          hover ? "bg-sec text-pri dark:bg-pri dark:text-sec" : ""
        }   items-center  relative h-[32px] transition-all w-[150px]  duration-700 rounded-[32px]`}
      >
        <motion.div
          className={`rounded-full w-8 h-8 ${
            hover ? "" : ""
          }    dark:bg-pri bg-black transition-all duration-1000  ease-in-out flex justify-center items-center`}
        >
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden dark:block"
          >
            <path
              d="M0.426086 0.888885L7.13913 8.547L0.426086 15.1111"
              stroke="#0C0C0C"
            />
          </svg>
          <svg
            width="8"
            height="16"
            viewBox="0 0 8 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:hidden"
          >
            <path
              d="M0.426086 0.888885L7.13913 8.547L0.426086 15.1111"
              stroke="#E3E3E3"
            />
          </svg>
        </motion.div>
        <span className={`px-2 text-center`}>{title}</span>
      </motion.div>
    </Link>
  );
};

export default Button;
