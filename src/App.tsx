import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import SearchSkill from "./components/SearchSkill/SearchSkill";

function App() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  const lightTheme = {
    primary: "#201e20",
    secondary: "#e0a96d",
    bgColor: "#f9f5f0",
    fontColor: "#000",
  };

  const darkTheme = {
    primary: "#36454f",
    secondary: "#e0a96d",
    bgColor: "#202020",
    fontColor: "#ffffff",
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <h1>Hello, Welcome to HRM App</h1>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
        <SearchSkill />
        <Modal isOpen={isOpen} handleModalClose={() => setIsOpen(false)}>
          <Button btnType="primary">Submit</Button>
          <Button btnType="secondary">Submit</Button>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App;
