import { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import ImageUpload from "../../components/Employee/ImageUpload/ImageUpload";
import { FormWrapper } from "./EmployeeForm.style";
import Input from "../../components/common/Input/Input";
import SearchSkill from "../../components/common/SearchSkill/SearchSkill";
import { skillList } from "../../core/constants";
import { ISkills } from "../../core/interfaces/interfaces";
const EmployeeForm = () => {
  const [skills, setSkills] = useState<ISkills[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<ISkills[]>([]);

  useEffect(() => {
    //TODO: Fetch all skills from firebase
    setSkills(skillList);
  }, [skillList]);

  const employeeDetails = {
    id: "",
    fullName: "",
    dateOfBirth: 0,
    dateOfJoin: 0,
    email: "",
    mobile: "",
    workLocation: "",
    imageURL: "",
    department: "",
    role: "",
    skill: [],
  };

  const handleSelectedSkills = (id: string) => {
    const selectedSkill = skills.filter((skill) => skill.id === id);
    const updateListOfSkills = skills.filter((skill) => skill.id !== id);
    setSelectedSkills((prev) => [...prev, ...selectedSkill] as ISkills[]);
    setSkills(updateListOfSkills);
  };

  const handleRemoveSelectedSkill = (id: string) => {
    const selectedSkill = selectedSkills.find((skill) => skill.id === id);
    const updatedListOfSelectedSkills = selectedSkills.filter(
      (skill) => skill.id !== id
    );

    setSelectedSkills(updatedListOfSelectedSkills);
    setSkills((prev) => [...prev, selectedSkill] as ISkills[]);
  };

  return (
    <FormWrapper>
      <ImageUpload />
      <Formik initialValues={employeeDetails} onSubmit={() => {}}>
        <Form>
          <Input
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter Full Name"
          />
          <Input
            label="Full Name"
            name="fullName"
            type="date"
            placeholder="Enter Full Name"
          />
          <Input
            label="Email ID"
            name="email"
            type="email"
            placeholder="Enter email address"
          />
          <Input
            label="Mobile Number"
            name="mobile"
            type="number"
            placeholder="Enter Mobile Number"
          />
          <SearchSkill
            placeholder="Search skills to add"
            listOfSkills={skills}
            selectedSkills={selectedSkills}
            handleSelectedSkills={handleSelectedSkills}
            removeSelectedSkill={handleRemoveSelectedSkill}
          />
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default EmployeeForm;
