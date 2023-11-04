import { useState } from "react";
import AppContextProvider from "./core/store/AppContext";

import { AppThemeProvider } from "./core/theme/provider";
import Layout from "./components/Layout/Layout";
import EmployeeListing from "./pages/EmployeeListing/EmployeeListing";
import EmployeeForm from "./pages/EmployeeForm/EmployeeForm";

function App() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContextProvider>
      <AppThemeProvider selectedTheme={theme}>
        <Layout>
          <EmployeeForm />
          {/* <EmployeeListing /> */}
        </Layout>
      </AppThemeProvider>
    </AppContextProvider>
  );
}

export default App;
