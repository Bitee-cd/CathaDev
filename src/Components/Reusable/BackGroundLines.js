import React from "react";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";

const BackGroundLines = ({ position, top }) => {
  const { darkMode } = useAppContext();
  return (
    <div className={`absolute ${top} w-screen -z-10`}>
      <Lines />
      <MobileLines />
      <div
        className={`${styles.sphere} ${position}  dark:hidden  sphere_light -z-0  absolute  -translate-y-1/2 text-black dark:text-pri`}
      ></div>
      <div
        className={`${styles.sphere} ${position}  hidden dark:block  sphere_dark -z-0  absolute  -translate-y-1/2 text-black dark:text-pri`}
      ></div>
    </div>
  );
};

export default BackGroundLines;
export const Lines = (props) => {
  return (
    <div className="hidden md:block">
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1280 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="translate-y-1/2 dark:hidden"
      >
        <path
          d="M-130 158.848C-130 158.848 69.8621 19.1204 242.731 2.04262C415.6 -15.0352 512.086 183.688 645.327 158.848C778.568 134.007 829.682 2.04262 954.883 2.04262C1080.08 2.04262 1319 158.848 1319 158.848"
          stroke="#0C0C0C"
          strokeOpacity={0.7}
          strokeDasharray="4 4"
        />
        <path
          d="M1 144.278C1 144.278 193.138 32.4963 359.326 18.8341C525.514 5.17187 618.271 164.15 746.363 144.278C874.455 124.406 923.593 18.8341 1043.96 18.8341C1164.32 18.8341 1394 144.278 1394 144.278"
          stroke="#0C0C0C"
          strokeOpacity={0.7}
          strokeDasharray="4 4"
        />
      </svg>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 1280 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="translate-y-1/2 hidden dark:block"
      >
        <path
          d="M-130 158.848C-130 158.848 69.8621 19.1204 242.731 2.04262C415.6 -15.0352 512.086 183.688 645.327 158.848C778.568 134.007 829.682 2.04262 954.883 2.04262C1080.08 2.04262 1319 158.848 1319 158.848"
          stroke="#E3E3E3"
          strokeOpacity={0.7}
          strokeDasharray="4 4"
        />
        <path
          d="M1 144.278C1 144.278 193.138 32.4963 359.326 18.8341C525.514 5.17187 618.271 164.15 746.363 144.278C874.455 124.406 923.593 18.8341 1043.96 18.8341C1164.32 18.8341 1394 144.278 1394 144.278"
          stroke="#E3E3E3"
          strokeOpacity={0.7}
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
};
export const MobileLines = (props) => {
  return (
    <div className="md:hidden">
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 360 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="translate-y-1/2 dark:hidden"
      >
        <path
          d="M-115 72.0315C-115 72.0315 -35.9207 9.15418 32.4783 1.46918C100.877 -6.21582 139.054 83.2096 191.773 72.0315C244.493 60.8533 264.717 1.46918 314.255 1.46918C363.793 1.46918 458.325 72.0315 458.325 72.0315"
          stroke="#0C0C0C"
          strokeOpacity={0.7}
          strokeWidth={0.5}
          strokeDasharray="4 4"
        />
        <path
          d="M-63.1675 65.4752C-63.1675 65.4752 12.8556 15.1734 78.6112 9.02537C144.367 2.87737 181.068 74.4177 231.75 65.4752C282.432 56.5326 301.874 9.02537 349.498 9.02537C397.122 9.02537 488 65.4752 488 65.4752"
          stroke="#0C0C0C"
          strokeOpacity={0.7}
          strokeWidth={0.5}
          strokeDasharray="4 4"
        />
      </svg>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 360 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="translate-y-1/2 hidden dark:block"
      >
        <path
          d="M-115 72.0315C-115 72.0315 -35.9207 9.15418 32.4783 1.46918C100.877 -6.21582 139.054 83.2096 191.773 72.0315C244.493 60.8533 264.717 1.46918 314.255 1.46918C363.793 1.46918 458.325 72.0315 458.325 72.0315"
          stroke="#E3E3E3"
          strokeOpacity={0.7}
          strokeWidth={0.5}
          strokeDasharray="4 4"
        />
        <path
          d="M-63.1675 65.4752C-63.1675 65.4752 12.8556 15.1734 78.6112 9.02537C144.367 2.87737 181.068 74.4177 231.75 65.4752C282.432 56.5326 301.874 9.02537 349.498 9.02537C397.122 9.02537 488 65.4752 488 65.4752"
          stroke="#E3E3E3"
          strokeOpacity={0.7}
          strokeWidth={0.5}
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
};
