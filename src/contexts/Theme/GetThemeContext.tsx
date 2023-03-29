import React, { createContext } from "react";
import { ThemeProps } from "../../types/ThemeType";
import usePersistedState from "../../hooks/usePersistedState";
import { DefaultTheme } from "styled-components";
import { light } from "../../styles/theme/light";
import { dark } from "../../styles/theme/dark";

interface Props {
  children: React.ReactNode;
}

export const GetThemeContext = createContext({} as ThemeProps);

const GetThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => setTheme(theme.title === "light" ? dark : light);

  return (
    <GetThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </GetThemeContext.Provider>
  );
};

export default GetThemeProvider;
