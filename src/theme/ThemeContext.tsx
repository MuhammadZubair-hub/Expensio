import React, { createContext, useState } from "react";
import { DarkColors, LightColors } from "./colors";
export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        colors: dark ? DarkColors : LightColors,
        dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}