import { useState } from "react";
import AppContextProvider from "./core/store/AppContext";

import { AppThemeProvider } from "./core/theme/provider";
import Layout from "./components/Layout/Layout";

import { RouterProvider } from "react-router-dom";
import { routes } from "./core/routing/publicRoutes";

function App() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContextProvider>
      <AppThemeProvider selectedTheme={theme}>
        <RouterProvider router={routes} />
      </AppThemeProvider>
    </AppContextProvider>
  );
}

export default App;
