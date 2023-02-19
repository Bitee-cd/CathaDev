import Image from "next/image";
import React from "react";
import lines from "../../../public/images/about/line.png";
import line_dark from "../../../public/images/about/line_dark.png";
import styles from "./styles.module.css";
import { useAppContext } from "../Context/AppContext";

const BackGroundLines = ({ position, top }) => {
  const { darkMode } = useAppContext();
  return (
    <div className={`absolute ${top} `}>
      <Image
        alt=" trusted hands holding website"
        placeholder="blur"
        priority
        src={darkMode ? lines : line_dark}
        sizes="100vw"
        style={{
          width: "100vw",
          height: "auto",
        }}
        className=" w-screen -translate-y-1/2 zindex_1"
      />

      <div
        className={`${styles.sphere} ${position}  -z-0  absolute top-0 -translate-y-1/2 text-black dark:text-pri`}
      ></div>
    </div>
  );
};

export default BackGroundLines;
