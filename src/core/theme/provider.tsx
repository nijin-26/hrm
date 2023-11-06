import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { useAppContext } from "../store/AppContext";

export const AppThemeProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const { state } = useAppContext();
  return <ThemeProvider theme={themes[state.theme]}>{children}</ThemeProvider>;
};
