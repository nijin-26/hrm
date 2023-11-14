import AppContextProvider from "./core/store/AppContext";

import { RouterProvider } from "react-router-dom";
import { routes } from "./core/routing/publicRoutes";
import ThemeContextProvider from "./core/theme/ThemeContext";
import Modal from "./components/common/Modal/Modal";
import DeleteConfirmation from "./components/Employee/DeleteConfirmation/DeleteConfirmation";

function App() {
  return (
    <AppContextProvider>
      <ThemeContextProvider>
        <RouterProvider router={routes} />
        <Modal isOpen={true} handleModalClose={() => {}}>
          <DeleteConfirmation employeeId="1010" />
        </Modal>
      </ThemeContextProvider>
    </AppContextProvider>
  );
}

export default App;
