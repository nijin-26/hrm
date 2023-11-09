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
  state: IThemeContextState;
  dispatch: Dispatch<any>;
}
