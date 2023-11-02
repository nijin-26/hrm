import { useState } from "react";
import SearchSkill from "../../common/SearchSkill/SearchSkill";
import { ISkills } from "../../../core/interfaces/interfaces";
import Select from "../../common/FilterSelect/FilterSelect";

const FilterOptions = () => {
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState<ISkills[]>([
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

  const [selectedSkills, setSelectedSkills] = useState<ISkills[]>([]);

  const handleSelectDept = () => {};

  const handleSelectedSkills = (id: string) => {
    const selectedSkill = skills.filter((sk) => sk.id === id);
    const updateListOfSkills = skills.filter((sk) => sk.id !== id);
    setSelectedSkills((prev) => [...prev, ...selectedSkill] as ISkills[]);
    setSkills(updateListOfSkills);
  };

  const handleRemoveSelectedSkill = (id: string) => {
    const selectedSkill = selectedSkills.find((sk) => sk.id === id);
    const updatedListOfSelectedSkills = selectedSkills.filter(
      (sk) => sk.id !== id
    );

    setSelectedSkills(updatedListOfSelectedSkills);
    setSkills((prev) => [...prev, selectedSkill] as ISkills[]);
  };
  return (
    <div className="flex">
      <Select value={department} onChange={handleSelectDept}>
        <option value="development">Development</option>
      </Select>
      <Select value={role} onChange={() => {}}>
        <option value="frontend">Frontend</option>
      </Select>
      <SearchSkill
        listOfSkills={skills}
        selectedSkills={selectedSkills}
        handleSelectedSkills={handleSelectedSkills}
        removeSelectedSkill={handleRemoveSelectedSkill}
      />
    </div>
  );
};

export default FilterOptions;
