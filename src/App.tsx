import AppContextProvider from "./core/context/AppContext";

import { RouterProvider } from "react-router-dom";
import { routes } from "./core/routing/publicRoutes";
import ThemeContextProvider from "./core/theme/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./core/store/store";

function App() {
  return (
    // <AppContextProvider>
    <Provider store={store}>
      <ThemeContextProvider>
        <RouterProvider router={routes} />
      </ThemeContextProvider>
    </Provider>

    // </AppContextProvider>
  );
}

export default App;
