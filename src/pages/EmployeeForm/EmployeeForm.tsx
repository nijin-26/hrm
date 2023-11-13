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
import { employeeFormValidationSchema } from "../../core/utils/employeeFormValidationSchema";
import { IEmployeeDetails } from "../../core/interfaces/Common";
import { useAppContext } from "../../core/store/AppContext";
import { getFormattedDate } from "../../core/utils/formatDate";
import { Fade } from "react-awesome-reveal";
import { ChangeEvent, useState } from "react";
import moment from "moment";
import { generateUniqueKey } from "../../core/utils/generateUniqueID";
import actionTypes from "../../core/store/actionTypes";

const EmployeeForm = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const { state, dispatch } = useAppContext();
  const location = useLocation();
  const theme = useTheme();
  const {
    skills,
    selectedSkills,
    searchInput,
    handleInput,
    handleSelectedSkills,
    handleRemoveSelectedSkill,
  } = useSkills();

  let initialEmployeeDetails: IEmployeeDetails = {
    id: "",
    fullName: "",
    dateOfBirth: "",
    dateOfJoin: "",
    email: "",
    mobile: "",
    workLocation: "",
    imageURL: "",
    department: "",
    role: "",
    skill: [],
  };

  const currentFormType = location.pathname.split("/")[1] || "add";
  const employeeId = location.pathname.split("/")[2];

  if (currentFormType === "edit" && employeeId) {
    const selectedEmp: IEmployeeDetails | undefined = state.employees.find(
      (employee) => employee.id === employeeId
    );
    if (selectedEmp) {
      initialEmployeeDetails = {
        ...selectedEmp,
        dateOfBirth: getFormattedDate(selectedEmp.dateOfBirth as string)[1],
        dateOfJoin: getFormattedDate(selectedEmp.dateOfJoin as string)[1],
      };
      skills.map((skill) => {
        if (selectedEmp.skill?.includes(skill.id))
          handleSelectedSkills(skill.id);
      });
    }
  }

  const handleImageInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length !== 0)
      setImageFile(target.files[0]);
  };

  const removeSelectedImage = () => {
    setImageFile(null);
  };

  const handleEmployeeAdd = (values: IEmployeeDetails) => {
    const employeeDetails = {
      ...values,
      id: generateUniqueKey(state.employees),
      dateOfBirth: moment(values.dateOfBirth, "YYYY-MM-DD").valueOf(),
      dateOfJoin: moment(values.dateOfJoin, "YYYY-MM-DD").valueOf(),
      imageURL: imageFile ? URL.createObjectURL(imageFile as File) : "", //TODO: Upload image and get image URL
      skill: selectedSkills.map((skill) => skill.id),
    };
    dispatch({ type: actionTypes.ADD_EMPLOYEE, payload: employeeDetails });
  };

  const handleEmployeeUpdate = (values: IEmployeeDetails) => {
    console.log(values, "update meployee");
  };

  const formContainerStyle = {
    backgroundColor: theme.bgColor,
  } as CSSProperties;

  return (
    <Fade>
      <h1 className="text-center">{`${
        currentFormType === "edit" ? "Edit" : "Add"
      } Employee`}</h1>
      <div className={style.formContainer} style={formContainerStyle}>
        <ImageUpload
          src={imageFile ? URL.createObjectURL(imageFile as File) : ""}
          removeSelectedImage={removeSelectedImage}
          handleImageInput={handleImageInput}
        />
        <Formik
          initialValues={initialEmployeeDetails}
          validationSchema={employeeFormValidationSchema}
          onSubmit={
            currentFormType === "edit"
              ? handleEmployeeUpdate
              : handleEmployeeAdd
          }
        >
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
                searchInput={searchInput}
                handleInput={handleInput}
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
    </Fade>
  );
};

export default EmployeeForm;
