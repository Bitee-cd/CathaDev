import { createContext, useContext, useState } from "react";
import React from "react";
import { Squada_One } from "@next/font/google";
import { League_Spartan } from "@next/font/google";

const Context = createContext();
const squada = Squada_One({
  subsets: ["latin"],
  weight: ["400"],
});
const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const AppContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mouseHovered, setMouseHovered] = useState(false);
  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
        squada,
        spartan,
        mouseHovered,
        setMouseHovered,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
