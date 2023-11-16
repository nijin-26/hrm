// External Libraries
import { Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { CSSProperties, useTheme } from "styled-components";
import { Fade } from "react-awesome-reveal";
import { ChangeEvent, useEffect, useState } from "react";
import moment from "moment";

// Styling & Constants
import style from "./style.module.scss";
import { workLocation } from "../../core/constants";

// Components
import Select from "../../components/common/Select/Select";
import Button from "../../components/common/Button/Button";
import ImageUpload from "../../components/common/ImageUpload/ImageUpload";
import Input from "../../components/common/Input/Input";
import SearchSkill from "../../components/common/SearchSkill/SearchSkill";
import useSkills from "../../core/hooks/useSkills";

// Validation and Schema
import { employeeFormValidationSchema } from "../../core/utils/employeeFormValidationSchema";

// Interfaces
import { IEmployeeDetails } from "../../core/interfaces/Common";

// Utility Functions
import { getFormattedDate } from "../../core/utils/formatDate";
import { generateUniqueKey } from "../../core/utils/generateUniqueID";

// Store and API
import { useAppContext } from "../../core/store/AppContext";
import actionTypes from "../../core/store/actionTypes";
import { postEmployeeData, updateEmployeeData } from "../../core/api";
import { toast } from "react-toastify";

const EmployeeForm = () => {
  const [initialEmployeeDetails, setInitialEmployeeDetails] =
    useState<IEmployeeDetails>({
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
    });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const { state, dispatch } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    skills,
    selectedSkills,
    searchInput,
    handleInput,
    handleSelectedSkills,
    handleRemoveSelectedSkill,
  } = useSkills();

  const currentFormType = location.pathname.split("/")[1] || "add";
  const employeeId = location.pathname.split("/")[2];

  useEffect(() => {
    if (currentFormType === "edit" && employeeId) {
      const selectedEmp: IEmployeeDetails | undefined = state.employees.find(
        (employee) => employee.id === employeeId
      );

      if (selectedEmp) {
        const selectedEmpDetails = {
          ...selectedEmp,
          dateOfBirth: getFormattedDate(selectedEmp.dateOfBirth as string)[1],
          dateOfJoin: getFormattedDate(selectedEmp.dateOfJoin as string)[1],
        };
        setInitialEmployeeDetails(selectedEmpDetails);

        // * Faced too many rerendering issue below. Somehow fixed it.
        if (selectedEmp.skill !== undefined)
          handleSelectedSkills(selectedEmp.skill);
      }
    }
  }, []);

  const handleImageInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length !== 0)
      setImageFile(target.files[0]);
  };

  const removeSelectedImage = () => {
    setImageFile(null);
  };

  const addEmployee = async (employeeData: IEmployeeDetails) => {
    try {
      const empId = employeeData.id;
      delete employeeData.id;

      const response = await postEmployeeData(
        `/employee/${empId}.json`,
        employeeData
      );
      if (response) {
        toast.success("Employee Added Successfully");
        dispatch({
          type: actionTypes.ADD_EMPLOYEE,
          payload: {
            id: empId,
            data: employeeData,
          },
        });
        navigate("/");
      }
    } catch (error) {
      toast.error("Error adding employee");
    }
  };

  const updateEmployee = async (employeeData: IEmployeeDetails) => {
    try {
      const empId: string = employeeData.id as string;
      delete employeeData.id;

      const response = await updateEmployeeData(
        `/employee/${empId}.json`,
        employeeData
      );

      if (response) {
        toast.success("Employee Updated Successfully");
        dispatch({
          type: actionTypes.UPDATE_EMPLOYEE,
          payload: {
            id: empId,
            data: employeeData,
          },
        });
        navigate(`/view/${empId}`);
      }
    } catch (error: any) {
      toast.error("Error updating employee. Try again");
    }
  };

  const handleFormSubmit = (values: IEmployeeDetails) => {
    const employeeDetails = {
      ...values,
      id: values.id ? values.id : generateUniqueKey(state.employees),
      dateOfBirth: moment(values.dateOfBirth, "YYYY-MM-DD").valueOf(),
      dateOfJoin: moment(values.dateOfJoin, "YYYY-MM-DD").valueOf(),
      imageURL: imageFile
        ? URL.createObjectURL(imageFile as File)
        : values.imageURL, //TODO: Upload image and get image URL
      skill: selectedSkills.map((skill) => skill.id),
    };
    delete employeeDetails.actions;

    currentFormType === "edit"
      ? updateEmployee(employeeDetails)
      : addEmployee(employeeDetails);
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
          enableReinitialize
          initialValues={initialEmployeeDetails}
          validationSchema={employeeFormValidationSchema}
          onSubmit={handleFormSubmit}
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
                datas={state.departments}
              />
              <Select
                label="Role"
                name="role"
                placeholder="Select Role"
                datas={state.roles}
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
              <Button btnType="secondary" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </Fade>
  );
};

export default EmployeeForm;
