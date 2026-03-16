import React, { createContext, ReactNode, useContext, useState } from "react";
import { DarkColors, LightColors } from "./colors";


interface Colors {
  primary: string
  primarySoft: string
  secondary: string

  background: string
  card: string
  border: string

  textPrimary: string
  textSecondary: string
}

type ThemeContextType = {
  colors: Colors;
  toggleTheme: () => void;
  dark: boolean,
}
interface ThemeProviderProps {
  children: ReactNode
}


export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);



export default function ThemeProvider({ children }: ThemeProviderProps) {
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


export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};