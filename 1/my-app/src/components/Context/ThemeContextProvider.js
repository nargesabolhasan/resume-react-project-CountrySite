import { createContext, useState } from "react";
import { THEME } from "../Constants/ThemeConst";

export const themeContext = createContext();
function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(THEME.DARK);
  const value = {
    theme,
    darkMode: () => setTheme(THEME.DARK),
    lightMode: () => setTheme(THEME.LIGHT)
  };
  return (
    <themeContext.Provider value={value}>{props.children}</themeContext.Provider>
  );
}
export default ThemeContextProvider;
