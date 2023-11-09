import { ITheme } from "../interfaces/ThemeInterfaces";

const lightTheme = {
  primary: "#201e20",
  secondary: "#e0a96d",
  bgColor: "#f9f5f0",
  fontColor: "#000",
};

const darkTheme = {
  primary: "#36454f",
  secondary: "#e0a96d",
  bgColor: "#202020",
  fontColor: "#ffffff",
};

export const themes: { [key: string]: ITheme } = {
  light: lightTheme,
  dark: darkTheme,
};
