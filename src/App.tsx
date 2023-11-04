import { useState } from "react";
import AppContextProvider from "./core/store/AppContext";

import Modal from "./components/common/Modal/Modal";
import Button from "./components/common/Button/Button";
import SearchSkill from "./components/common/SearchSkill/SearchSkill";
import { AppThemeProvider } from "./core/theme/provider";
import NavBar from "./components/common/NavBar/NavBar";
import { GlobalStyle } from "./core/styles/global";
import Layout from "./components/Layout/Layout";
import TableView from "./components/Employee/Listing/TableView";
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
