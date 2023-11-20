import { Dispatch } from "react";

export interface ITheme {
  primary: string;
  secondary: string;
  bgColor: string;
  fontColor: string;
}

export interface IThemeContextState {
  theme: ITheme;
  colorMode: "light" | "dark" | string;
}

export interface IThemeContext {
  tState: IThemeContextState;
  tDispatch: Dispatch<any>;
}
