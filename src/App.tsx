import { useState } from "react";
import AppContextProvider from "./core/store/AppContext";

import Modal from "./components/common/Modal/Modal";
import Button from "./components/common/Button/Button";
import SearchSkill from "./components/common/SearchSkill/SearchSkill";
import { AppThemeProvider } from "./core/theme/provider";
import NavBar from "./components/common/NavBar/NavBar";
import { GlobalStyle } from "./core/styles/global";
import Layout from "./Layout/Layout";
import TableView from "./components/Employee/Listing/TableView";

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
    <AppContextProvider>
      <AppThemeProvider selectedTheme={theme}>
        <Layout>
          <h1>Welcome to hRM app</h1>
          <TableView employees={[]} />
        </Layout>
      </AppThemeProvider>
    </AppContextProvider>
  );
}

export default App;
