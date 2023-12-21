import { RouterProvider } from "react-router-dom";
import { routes } from "./core/routing/routes";
import ThemeContextProvider from "./core/theme/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./core/store/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <RouterProvider router={routes} />
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;
