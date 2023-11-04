import { Form, Formik } from "formik";
import ImageUpload from "../../components/Employee/ImageUpload/ImageUpload";
import Input from "../../components/common/Input/Input";
import SearchSkill from "../../components/common/SearchSkill/SearchSkill";
import useSkills from "../../core/hooks/useSkills";

import style from "./style.module.scss";

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
    <div className={style.formContainer}>
      <ImageUpload />
      <Formik initialValues={employeeDetails} onSubmit={() => {}}>
        <Form>
          <Input
            label="Full Name"
            name="fullName"
            type="text"
            placeholder="Enter Full Name"
          />
          <Input label="Date of Join" name="dateOfJoin" type="date" />
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
          <Input label="Date of Birth" name="dateOfBirth" type="date" />

          <SearchSkill
            placeholder="Search skills to add"
            listOfSkills={skills}
            selectedSkills={selectedSkills}
            handleSelectedSkills={handleSelectedSkills}
            removeSelectedSkill={handleRemoveSelectedSkill}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default EmployeeForm;
