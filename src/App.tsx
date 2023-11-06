import AppContextProvider from "./core/store/AppContext";

import { AppThemeProvider } from "./core/theme/provider";

import { RouterProvider } from "react-router-dom";
import { routes } from "./core/routing/publicRoutes";

function App() {
  return (
    <AppContextProvider>
      <AppThemeProvider>
        <RouterProvider router={routes} />
      </AppThemeProvider>
    </AppContextProvider>
  );
}

export default App;
