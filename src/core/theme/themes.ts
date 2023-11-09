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

//TODO: Following Themes will be used later
const oneDarkTheme = {
  primary: "#2a303b",
  secondary: "#abb2bf",
  bgColor: "#282c34",
  fontColor: "#abb2bf",
};

const shadowTheme = {
  primary: "#424242",
  secondary: "#808080",
  bgColor: "#6b6b6b",
  fontColor: "#ffffff",
};

const lavenderTheme = {
  primary: "#7d53e8",
  secondary: "#d4a5a5",
  bgColor: "#f3e7e7",
  fontColor: "#3d3d3d",
};

const laserTheme = {
  primary: "#ff5733",
  secondary: "#f3b360",
  bgColor: "#1f1f1f",
  fontColor: "#ffffff",
};

export const themes: { [key: string]: ITheme } = {
  light: lightTheme,
  dark: darkTheme,
  laser: laserTheme,
  lavender: lavenderTheme,
  shadow: shadowTheme,
  onedark: oneDarkTheme,
};
