import { createContext, ReactNode, useContext, useState } from "react";

interface DarkModeDataProps {
  isDarkModeActive: boolean;
  toggleDarkMode: () => void;
}

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkMode = createContext({} as DarkModeDataProps);

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  function toggleDarkMode() {
    setIsDarkModeActive(!isDarkModeActive);
  }

  return (
    <DarkMode.Provider value={{ isDarkModeActive, toggleDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
}

export const useDark = () => {
  return useContext(DarkMode);
};
