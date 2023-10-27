import { useState } from "react";

import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import SearchSkill from "./components/SearchSkill/SearchSkill";
import { AppThemeProvider } from "./core/theme/provider";
import Employee from "./Employee/Employee";

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
    <AppThemeProvider selectedTheme={theme}>
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
        <Employee />
      </div>
    </AppThemeProvider>
  );
}

export default App;
