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
  state: initialState,
  dispatch: () => {},
});

export function useThemeContext() {
  return useContext(ThemeContext);
}

const themeReducer = (state: IThemeContextState, action: IContextAction) => {
  switch (action.type) {
    case "TOGGLE_DARK_LIGHT":
      if (state.colorMode === "light") {
        localStorage.setItem("theme", "dark");
        return { ...state, colorMode: "dark", theme: themes["dark"] };
      } else {
        localStorage.setItem("theme", "light");
        return { ...state, colorMode: "light", theme: themes["light"] };
      }
    default:
      return state;
  }
};

function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
