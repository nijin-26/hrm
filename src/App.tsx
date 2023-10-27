import { useState } from "react";
import { ThemeProvider } from "styled-components";

import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import SearchSkill from "./components/SearchSkill/SearchSkill";

function App() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [skills, setSkills] = useState<{ id: string; name: string }[]>([
    {
      id: "S1",
      name: "React.JS",
    },
    {
      id: "S2",
      name: "Angular.JS",
    },
    {
      id: "S3",
      name: "Vue.JS",
    },
    {
      id: "S4",
      name: "Svelte.JS",
    },
  ]);
  const [selectedSkills, setSelectedSkills] = useState<
    { id: string; name: string }[]
  >([]);

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

  const handleSelectedSkills = (id: string) => {
    const selectedSkill = skills.filter((sk) => sk.id === id);
    const updateListOfSkills = skills.filter((sk) => sk.id !== id);
    setSelectedSkills(
      (prev) => [...prev, ...selectedSkill] as { id: string; name: string }[]
    );
    setSkills(updateListOfSkills);
  };

  const handleRemoveSelectedSkill = (id: string) => {
    const selectedSkill = selectedSkills.find((sk) => sk.id === id);
    const updatedListOfSelectedSkills = selectedSkills.filter(
      (sk) => sk.id !== id
    );

    setSelectedSkills(updatedListOfSelectedSkills);
    setSkills(
      (prev) => [...prev, selectedSkill] as { id: string; name: string }[]
    );
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <h1>Hello, Welcome to HRM App</h1>
        <button onClick={() => setIsOpen(true)}>Open modal</button>
        <SearchSkill
          listOfSkills={skills}
          selectedSkills={selectedSkills}
          handleSelectedSkills={handleSelectedSkills}
          removeSelectedSkill={handleRemoveSelectedSkill}
        />
        <Modal isOpen={isOpen} handleModalClose={() => setIsOpen(false)}>
          <Button btnType="primary">Submit</Button>
          <Button btnType="secondary">Submit</Button>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default App;
