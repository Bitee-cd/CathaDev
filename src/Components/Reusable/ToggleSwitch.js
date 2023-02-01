import React, { useState } from "react";
import { useAppContext } from "../Context/AppContext";
import { useTheme } from "next-themes";

const ToggleSwitch = () => {
  const { theme, setTheme } = useTheme();
  const { darkMode, setDarkMode } = useAppContext();
  const darkTheme = () => {
    setDarkMode(!darkMode);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="relative hover:cursor-pointer" onClick={darkTheme}>
      <div className="rounded-full w-8 h-8 dark:bg-pri dark:border-sec bg-sec border-[2px] border-pri "></div>
      <div
        className={`dark:bg-sec rounded-full w-8 h-8 bg-pri border-[2px] left-[50%] transition-all ease-in duration-500 dark:border-pri border-sec absolute top-0 `}
      ></div>
    </div>
  );
};

export default ToggleSwitch;
