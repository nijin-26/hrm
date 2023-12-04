import { ReactNode, createContext, useContext, useReducer } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import {
  IThemeContext,
  IThemeContextState,
} from "../interfaces/ThemeInterfaces";
import { IContextAction } from "../interfaces/Common";

const localStorageColorMode: string = localStorage.getItem("theme") || "light";

const initialState: IThemeContextState = {
  theme: themes[localStorageColorMode],
  colorMode: localStorageColorMode,
};

const ThemeContext = createContext<IThemeContext>({
  tState: initialState,
  tDispatch: () => {},
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

const themeReducer = (state: IThemeContextState, action: IContextAction) => {
  switch (action.type) {
    case "TOGGLE_DARK_LIGHT":
      return toggleDarkLightTheme(state);
    default:
      return state;
  }
};

const toggleDarkLightTheme = (state: IThemeContextState) => {
  if (state.colorMode === "light") {
    localStorage.setItem("theme", "dark");
    return { ...state, colorMode: "dark", theme: themes["dark"] };
  } else {
    localStorage.setItem("theme", "light");
    return { ...state, colorMode: "light", theme: themes["light"] };
  }
};

function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [tState, tDispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ tState, tDispatch }}>
      <ThemeProvider theme={tState.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
