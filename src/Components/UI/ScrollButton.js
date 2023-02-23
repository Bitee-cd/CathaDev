import React, { useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { useAppContext } from "../Context/AppContext";

const ScrollButton = () => {
  const { darkMode, setMouseHovered } = useAppContext();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="screen-center">
      <div
        onMouseEnter={() => setMouseHovered(true)}
        onMouseLeave={() => setMouseHovered(false)}
        className="ml-auto h-[70px] w-[70px] rounded-full p-5 bg-sec dark:bg-pri  duration-1000 scroll-smooth cursor-pointer"
        onClick={scrollToTop}
      >
        <BsArrowUp
          className="w-full"
          size="100%"
          color={`${darkMode ? "#0C0C0C" : "E3E3E3"}`}
        />
      </div>
    </div>
  );
};

export default ScrollButton;
