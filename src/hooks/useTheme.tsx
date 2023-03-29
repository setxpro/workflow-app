import { useContext } from "react";
import { GetThemeContext } from "../contexts/Theme/GetThemeContext";

export const useTheme = () => {
  const theme = useContext(GetThemeContext);
  return theme;
};
