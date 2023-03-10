import { createContext, useContext, useState } from "react";
import React from "react";
import { Squada_One } from "@next/font/google";
import { Sora } from "@next/font/google";
import { League_Spartan } from "@next/font/google";
import { useTheme } from "next-themes";

const Context = createContext();
const squada = Squada_One({
  subsets: ["latin"],
  weight: ["400"],
});
const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export const AppContext = ({ children }) => {
  const { theme } = useTheme();
  const [darkMode, setDarkMode] = useState(theme == "light" ? true : false);
  const [mouseHovered, setMouseHovered] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
        squada,
        spartan,
        mouseHovered,
        setMouseHovered,
        cursorVariant,
        setCursorVariant,
        textEnter,
        textLeave,
        sora,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
