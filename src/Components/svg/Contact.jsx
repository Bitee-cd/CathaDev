import * as React from "react";
import { useAppContext } from "../Context/AppContext";
import { useTheme } from "next-themes";
const ContactSvg = (props) => {
  const { darkMode } = useAppContext();
  const { theme } = useTheme();
  return (
    <>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 356 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="dark:hidden"
      >
        <path
          d="M167.591 322.737C147.511 321.677 127.956 315.674 110.472 305.203C92.9883 294.731 78.055 280.078 66.8532 262.403C55.6514 244.728 48.4883 224.514 45.9303 203.362C43.3723 182.209 45.4897 160.697 52.1148 140.527C58.74 120.357 69.6913 102.082 84.1028 87.147C98.5143 72.212 115.991 61.0269 135.15 54.476C154.309 47.9251 174.626 46.1881 194.494 49.4024C214.361 52.6168 233.235 60.6942 249.622 72.996L210.839 131.011C202.912 125.061 193.782 121.153 184.171 119.599C174.561 118.044 164.733 118.884 155.465 122.053C146.197 125.222 137.744 130.632 130.772 137.857C123.801 145.081 118.504 153.921 115.299 163.678C112.094 173.435 111.07 183.841 112.307 194.073C113.545 204.305 117.01 214.083 122.428 222.633C127.847 231.183 135.071 238.271 143.528 243.336C151.985 248.401 161.445 251.305 171.158 251.818L167.591 322.737Z"
          fill={` #0C0C0C `}
        />
        <path
          d="M190.442 149.667C209.805 151.197 228.636 157.309 245.545 167.552C262.454 177.795 277.011 191.909 288.143 208.852C299.275 225.796 306.699 245.138 309.868 265.453C313.036 285.769 311.869 306.539 306.451 326.235C301.033 345.931 291.503 364.05 278.564 379.256C265.624 394.463 249.604 406.37 231.685 414.1C213.766 421.83 194.403 425.186 175.025 423.921C155.646 422.655 136.745 416.801 119.715 406.789L151.935 344.581C160.141 349.405 169.249 352.226 178.586 352.836C187.923 353.446 197.253 351.829 205.887 348.104C214.522 344.379 222.241 338.642 228.475 331.315C234.71 323.988 239.302 315.257 241.913 305.767C244.523 296.277 245.086 286.269 243.559 276.48C242.032 266.691 238.455 257.371 233.091 249.207C227.727 241.043 220.713 234.243 212.565 229.307C204.418 224.371 195.345 221.427 186.015 220.689L190.442 149.667Z"
          fill={` #0C0C0C `}
        />
      </svg>
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 356 471"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        className="hidden dark:block"
      >
        <path
          d="M167.591 322.737C147.511 321.677 127.956 315.674 110.472 305.203C92.9883 294.731 78.055 280.078 66.8532 262.403C55.6514 244.728 48.4883 224.514 45.9303 203.362C43.3723 182.209 45.4897 160.697 52.1148 140.527C58.74 120.357 69.6913 102.082 84.1028 87.147C98.5143 72.212 115.991 61.0269 135.15 54.476C154.309 47.9251 174.626 46.1881 194.494 49.4024C214.361 52.6168 233.235 60.6942 249.622 72.996L210.839 131.011C202.912 125.061 193.782 121.153 184.171 119.599C174.561 118.044 164.733 118.884 155.465 122.053C146.197 125.222 137.744 130.632 130.772 137.857C123.801 145.081 118.504 153.921 115.299 163.678C112.094 173.435 111.07 183.841 112.307 194.073C113.545 204.305 117.01 214.083 122.428 222.633C127.847 231.183 135.071 238.271 143.528 243.336C151.985 248.401 161.445 251.305 171.158 251.818L167.591 322.737Z"
          fill="#E3E3E3"
        />
        <path
          d="M190.442 149.667C209.805 151.197 228.636 157.309 245.545 167.552C262.454 177.795 277.011 191.909 288.143 208.852C299.275 225.796 306.699 245.138 309.868 265.453C313.036 285.769 311.869 306.539 306.451 326.235C301.033 345.931 291.503 364.05 278.564 379.256C265.624 394.463 249.604 406.37 231.685 414.1C213.766 421.83 194.403 425.186 175.025 423.921C155.646 422.655 136.745 416.801 119.715 406.789L151.935 344.581C160.141 349.405 169.249 352.226 178.586 352.836C187.923 353.446 197.253 351.829 205.887 348.104C214.522 344.379 222.241 338.642 228.475 331.315C234.71 323.988 239.302 315.257 241.913 305.767C244.523 296.277 245.086 286.269 243.559 276.48C242.032 266.691 238.455 257.371 233.091 249.207C227.727 241.043 220.713 234.243 212.565 229.307C204.418 224.371 195.345 221.427 186.015 220.689L190.442 149.667Z"
          fill="#E3E3E3"
        />
      </svg>
    </>
  );
};
export default ContactSvg;
