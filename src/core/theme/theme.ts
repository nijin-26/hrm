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

export type Theme = typeof lightTheme;

export const themes: {
  [key: string]: {
    primary: string;
    secondary: string;
    bgColor: string;
    fontColor: string;
  };
} = {
  light: lightTheme,
  dark: darkTheme,
};
