import { useState, useEffect } from "react";
import { Form, Formik } from "formik";
import ImageUpload from "../../components/Employee/ImageUpload/ImageUpload";
import { FormWrapper } from "./EmployeeForm.style";
import Input from "../../components/common/Input/Input";
import SearchSkill from "../../components/common/SearchSkill/SearchSkill";
import { skillList } from "../../core/constants";
import { ISkills } from "../../core/interfaces/interfaces";
import useSkills from "../../core/hooks/useSkills";
const EmployeeForm = () => {
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

  const {
    skills,
    selectedSkills,
    handleSelectedSkills,
    handleRemoveSelectedSkill,
  } = useSkills();

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
