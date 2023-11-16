import AppContextProvider from "./core/store/AppContext";

import { RouterProvider } from "react-router-dom";
import { routes } from "./core/routing/publicRoutes";
import ThemeContextProvider from "./core/theme/ThemeContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AppContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={routes} />
      </ThemeContextProvider>
    </AppContextProvider>
  );
}

export default App;
