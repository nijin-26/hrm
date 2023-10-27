import { ThemeProvider } from "styled-components";
import { themes } from "./theme";

export const AppThemeProvider = ({
  selectedTheme,
  children,
}: {
  selectedTheme: string;
  children: React.ReactElement;
}) => <ThemeProvider theme={themes[selectedTheme]}>{children}</ThemeProvider>;
