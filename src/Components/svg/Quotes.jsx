import React from "react";
import { useAppContext } from "../Context/AppContext";

const Quotes = ({ props }) => {
  const { darkMode } = useAppContext();
  return (
    <svg
      width={30}
      height={28}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.2857 27.0942L23.5714 16.2566H17.1429L17.1429 0.000226974L30 0.000226974L30 16.2566L25.7143 27.0942H19.2857ZM2.14286 27.0942L6.42857 16.2566L0 16.2566L0 0.000226974H12.8571L12.8571 16.2566L8.57143 27.0942H2.14286Z"
        fill={`${!darkMode ? "#0C0C0C" : " #E3E3E3"} `}
      />
    </svg>
  );
};

export default Quotes;
