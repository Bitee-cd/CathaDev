import * as React from "react";
import { useAppContext } from "../Context/AppContext";
const LogoMobile = (props) => {
  const { darkMode } = useAppContext();
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={15}
        cy={15}
        r={15}
        fill={`${!darkMode ? "#E3E3E3" : "#0C0C0C"}`}
      />
      <path
        d="M7.5 7.5H16.3463C20.3703 7.5 23.6323 10.762 23.6323 14.7859C23.6323 18.8099 20.3703 22.0719 16.3464 22.0719H7.5V7.5Z"
        fill={`${darkMode ? "#E3E3E3" : "#0C0C0C"}`}
      />
      <path
        d="M10.1177 14.8169C10.1177 11.9694 12.426 9.66112 15.2734 9.66112H21.0942C23.9417 9.66112 26.25 11.9694 26.25 14.8169C26.25 17.6643 23.9417 19.9726 21.0942 19.9726H15.2734C12.426 19.9726 10.1177 17.6643 10.1177 14.8169Z"
        fill={`${!darkMode ? "#E3E3E3" : "#0C0C0C"}`}
      />
      <path
        d="M12.5806 14.7581C12.5806 14.09 13.1222 13.5484 13.7902 13.5484H22.3287C22.9968 13.5484 23.5384 14.09 23.5384 14.7581C23.5384 15.4261 22.9968 15.9677 22.3287 15.9677H13.7902C13.1222 15.9677 12.5806 15.4261 12.5806 14.7581Z"
        fill={`${darkMode ? "#E3E3E3" : "#0C0C0C"}`}
      />
    </svg>
  );
};
export default LogoMobile;