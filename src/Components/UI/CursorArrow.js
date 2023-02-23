import * as React from "react";
import { useAppContext } from "../Context/AppContext";

const CursorArrow = (props) => {
  const { darkMode } = useAppContext();
  return (
    <svg
      width={17}
      height={21}
      viewBox="0 0 17 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.912309 0.255633C1.02054 0.203264 1.14712 0.190042 1.27533 0.21771C1.40354 0.245379 1.52736 0.312638 1.63044 0.41061L15.8396 13.8902C15.939 13.9844 16.0148 14.103 16.0577 14.2313C16.1005 14.3597 16.1086 14.4922 16.081 14.6126C16.0533 14.7331 15.991 14.8362 15.9019 14.9093C15.8127 14.9825 15.7005 15.0224 15.579 15.0243L9.11563 15.1369L5.27692 20.0143C5.20484 20.1056 5.10517 20.1678 4.9901 20.1933C4.87504 20.2188 4.74957 20.2065 4.62903 20.158C4.5085 20.1094 4.39813 20.0267 4.31143 19.9199C4.22472 19.8132 4.16544 19.6869 4.14082 19.5567L0.63171 0.894369C0.606335 0.75914 0.619532 0.625872 0.669566 0.512089C0.719599 0.398306 0.804127 0.309335 0.912034 0.256873L0.912309 0.255633Z"
        fill={`${darkMode ? "#0C0C0C" : " #E3E3E3"} `}
      />
    </svg>
  );
};
export default CursorArrow;
