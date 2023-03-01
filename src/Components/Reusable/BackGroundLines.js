import Image from "next/image";
import React from "react";
import lines from "../../../public/images/about/line.png";
import line_dark from "../../../public/images/about/line_dark.png";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";
import { useTheme } from "next-themes";

const BackGroundLines = ({ position, top }) => {
  const { darkMode } = useAppContext();
  return (
    <div className={`absolute ${top} w-screen -z-10`}>
      <Lines />
      <div
        className={`${styles.sphere} ${position}  -z-0  absolute  -translate-y-1/2 text-black dark:text-pri`}
      ></div>
    </div>
  );
};

export default BackGroundLines;
export const Lines = (props) => {
  const { theme } = useTheme();
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 1280 162"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className="translate-y-1/2 "
    >
      <path
        d="M-130 158.848C-130 158.848 69.8621 19.1204 242.731 2.04262C415.6 -15.0352 512.086 183.688 645.327 158.848C778.568 134.007 829.682 2.04262 954.883 2.04262C1080.08 2.04262 1319 158.848 1319 158.848"
        stroke={`${theme !== "light" ? "#E3E3E3" : "#0C0C0C"}`}
        strokeOpacity={0.7}
        strokeDasharray="4 4"
      />
      <path
        d="M1 144.278C1 144.278 193.138 32.4963 359.326 18.8341C525.514 5.17187 618.271 164.15 746.363 144.278C874.455 124.406 923.593 18.8341 1043.96 18.8341C1164.32 18.8341 1394 144.278 1394 144.278"
        stroke={`${theme !== "light" ? "#E3E3E3" : "#0C0C0C"}`}
        strokeOpacity={0.7}
        strokeDasharray="4 4"
      />
    </svg>
  );
};
