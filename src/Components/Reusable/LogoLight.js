import React from "react";
import { useAppContext } from "../Context/AppContext";
import { useTheme } from "next-themes";

const Logo = () => {
  const { textEnter, textLeave } = useAppContext();
  const { theme, resolvedTheme } = useTheme();
  return (
    <>
      <svg
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:hidden"
      >
        <circle cx="31" cy="31" r="31" fill="#0C0C0C" />
        <path
          d="M15.5 15.5H33.7825C42.0986 15.5 48.8401 22.2415 48.8401 30.5576C48.8401 38.8737 42.0986 45.6153 33.7825 45.6153H15.5V15.5Z"
          fill="#E3E3E3"
        />
        <path
          d="M20.9099 30.6215C20.9099 24.7368 25.6804 19.9663 31.5651 19.9663H43.5948C49.4795 19.9663 54.25 24.7368 54.25 30.6215C54.25 36.5062 49.4795 41.2767 43.5948 41.2767H31.5651C25.6804 41.2767 20.9099 36.5062 20.9099 30.6215Z"
          fill="#0C0C0C"
        />
        <path
          d="M26 30.5C26 29.1193 27.1193 28 28.5 28H46.1461C47.5268 28 48.6461 29.1193 48.6461 30.5C48.6461 31.8807 47.5268 33 46.1461 33H28.5C27.1193 33 26 31.8807 26 30.5Z"
          fill="#E3E3E3"
        />
      </svg>
      <svg
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden dark:block"
      >
        <circle cx="31" cy="31" r="31" fill="#E3E3E3" />
        <path
          d="M15.5 15.5H33.7825C42.0986 15.5 48.8401 22.2415 48.8401 30.5576C48.8401 38.8737 42.0986 45.6153 33.7825 45.6153H15.5V15.5Z"
          fill="#0C0C0C"
        />
        <path
          d="M20.9099 30.6215C20.9099 24.7368 25.6804 19.9663 31.5651 19.9663H43.5948C49.4795 19.9663 54.25 24.7368 54.25 30.6215C54.25 36.5062 49.4795 41.2767 43.5948 41.2767H31.5651C25.6804 41.2767 20.9099 36.5062 20.9099 30.6215Z"
          fill="#E3E3E3"
        />
        <path
          d="M26 30.5C26 29.1193 27.1193 28 28.5 28H46.1461C47.5268 28 48.6461 29.1193 48.6461 30.5C48.6461 31.8807 47.5268 33 46.1461 33H28.5C27.1193 33 26 31.8807 26 30.5Z"
          fill="#0C0C0C"
        />
      </svg>
    </>
  );
};

export default Logo;
