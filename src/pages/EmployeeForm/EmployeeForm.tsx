import { Form, Formik } from "formik";
import ImageUpload from "../../components/common/ImageUpload/ImageUpload";
import Input from "../../components/common/Input/Input";
import SearchSkill from "../../components/common/SearchSkill/SearchSkill";
import useSkills from "../../core/hooks/useSkills";

import style from "./style.module.scss";
import Select from "../../components/common/Select/Select";
import { departments, roles, workLocation } from "../../core/constants";
import Button from "../../components/common/Button/Button";
import { useLocation } from "react-router-dom";
import { CSSProperties, useTheme } from "styled-components";

const EmployeeForm = () => {
  const location = useLocation();
  const theme = useTheme();
  console.log(theme);
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

  const currentFormType = location.pathname.split("/")[1];

  const formContainerStyle = {
    backgroundColor: theme.bgColor,
  } as CSSProperties;

  return (
    <>
      <h1 className="text-center">{`${
        currentFormType === "edit" ? "Edit" : "Add"
      } Employee`}</h1>
      <div className={style.formContainer} style={formContainerStyle}>
        <ImageUpload />
        <Formik initialValues={employeeDetails} onSubmit={() => {}}>
          <Form style={{ marginTop: "40px" }}>
            <div className={style.inputGroup}>
              <Input
                label="Full Name"
                name="fullName"
                type="text"
                placeholder="Enter Full Name"
              />
              <Input label="Date of Join" name="dateOfJoin" type="date" />
            </div>
            <div className={style.inputGroup}>
              <Input
                label="Email ID"
                name="email"
                type="email"
                placeholder="Enter email address"
              />
              <Input
                label="Mobile Number"
                name="mobile"
                type="text"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className={style.inputGroup}>
              <Input label="Date of Birth" name="dateOfBirth" type="date" />
              <Select
                label="Work Location"
                name="workLocation"
                placeholder="Select work location"
                datas={workLocation}
              />
            </div>
            <div className={style.inputGroup}>
              <Select
                label="Department"
                name="department"
                placeholder="Select Department"
                datas={departments}
              />
              <Select
                label="Role"
                name="role"
                placeholder="Select Role"
                datas={roles}
              />
            </div>
            <div className={style.skillInputWrapper}>
              <SearchSkill
                position="outside"
                placeholder="Search skills to add"
                listOfSkills={skills}
                selectedSkills={selectedSkills}
                handleSelectedSkills={handleSelectedSkills}
                removeSelectedSkill={handleRemoveSelectedSkill}
              />
            </div>

            <div className={style.formButtons}>
              <Button btnType="secondary">Cancel</Button>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default EmployeeForm;
