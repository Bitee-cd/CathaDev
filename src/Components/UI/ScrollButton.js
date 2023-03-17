import React, { useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { useAppContext } from "../Context/AppContext";
import { useTheme } from "next-themes";
import * as Scroll from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

const ScrollButton = () => {
  const { darkMode, setMouseHovered, textEnter, textLeave } = useAppContext();
  const { theme } = useTheme();
  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  const scrollToTop = () => {
    scroll.scrollToTop(500);
  };
  return (
    <div className="screen-center">
      <div
        onClick={scrollToTop}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="ml-auto h-[70px] w-[70px] rounded-full p-5 bg-sec dark:bg-pri  duration-1000 scroll-smooth cursor-pointer"
      >
        <BsArrowUp
          className="w-full text-pri dark:text-sec"
          size="100%"
          // color={`${!darkMode ? "#0C0C0C" : "#E3E3E3"}`}
        />
      </div>
    </div>
  );
};

export default ScrollButton;
