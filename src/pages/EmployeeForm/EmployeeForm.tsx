// External Libraries
import { Form, Formik, prepareDataForValidation } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { CSSProperties, useTheme } from "styled-components";
import { Fade } from "react-awesome-reveal";
import { ChangeEvent, useEffect, useState } from "react";
import moment from "moment";

// Styling & Constants
import style from "./style.module.scss";
import { workLocation } from "../../core/utils/constants";

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
import actionTypes from "../../core/store/actionTypes";
import { postEmployeeData, updateEmployeeData } from "../../core/api";
import { toast } from "react-toastify";
import { uploadImage } from "../../core/firebase/uploadImage";
import SelectedSkills from "../../components/common/SelectedSkills/SelectedSkills";

// Redux Store
import { useDispatch, useSelector } from "react-redux";
import { IAppContextState } from "../../core/interfaces/AppContextInterface";
import { Dispatch } from "redux";
import { signUpUserWithEmail } from "../../core/api/authAPI";

const EmployeeForm = () => {
  const [initialEmployeeDetails, setInitialEmployeeDetails] =
    useState<IEmployeeDetails>({
      id: "", // Employee ID
      fullName: "",
      dateOfBirth: "",
      dateOfJoin: "",
      email: "",
      password: "",
      mobile: "",
      workLocation: "",
      imageURL: "",
      department: "",
      role: "",
      skill: [],
    });
  const [imageFile, setImageFile] = useState<File | string | null>(null);
  const [loading, setLoading] = useState(false);

  const state = useSelector((state: IAppContextState) => state);
  const dispatch = useDispatch<Dispatch>();

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
    const loadEmployeeDetails = () => {
      const selectedEmployee = findEmployeeById(employeeId);

      if (selectedEmployee) {
        const formattedEmployeeDetails =
          formatEmployeeDetails(selectedEmployee);

        setInitialEmployeeDetails(formattedEmployeeDetails);

        if (selectedEmployee.skill !== undefined) {
          handleSelectedSkills(selectedEmployee.skill);
        }
      }
    };

    const findEmployeeById = (id: string): IEmployeeDetails | undefined => {
      return state.employees.find((employee) => employee.id === id);
    };

    const formatEmployeeDetails = (
      employee: IEmployeeDetails
    ): IEmployeeDetails => {
      return {
        ...employee,
        dateOfBirth: getFormattedDate(employee.dateOfBirth as string)[1],
        dateOfJoin: getFormattedDate(employee.dateOfJoin as string)[1],
      };
    };

    if (currentFormType === "edit" && employeeId) loadEmployeeDetails();
  }, []);

  const handleImageInput = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length !== 0)
      setImageFile(target.files[0]);
  };

  const removeSelectedImage = () => {
    setImageFile(null);
    setInitialEmployeeDetails((prev) => {
      return { ...prev, imageURL: "" } as IEmployeeDetails;
    });
  };

  const addEmployee = async (employeeData: IEmployeeDetails) => {
    try {
      const empId = employeeData.id;
      const employeePassword: string = employeeData.password!;
      delete employeeData.password;

      const userResponse = await signUpUserWithEmail({
        email: employeeData.email!,
        password: employeePassword,
      });

      if (userResponse) {
        setLoading(false);

        const response = await postEmployeeData(empId, employeeData);

        if (response) {
          toast.success("Employee Added Successfully");
          dispatch({
            type: actionTypes.ADD_EMPLOYEE,
            payload: {
              id: empId,
              data: employeeData,
              userId: userResponse.data.localId,
            },
          });
          navigate("/");
        }
      }
    } catch (error: any) {
      setLoading(false);

      if (error?.response?.data.error.message === "EMAIL_EXISTS")
        toast.error("Email already exists.");
      else {
        toast.error("Error adding employee");
        console.log(error, "Error singup");
      }
    }
  };

  const updateEmployee = async (employeeData: IEmployeeDetails) => {
    try {
      const empId: string = employeeData.id as string;
      delete employeeData.password;

      const response = await updateEmployeeData(empId, employeeData);

      if (response) {
        setLoading(false);
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
      setLoading(false);
      toast.error("Error updating employee. Try again");
    }
  };

  const handleFormSubmit = async (values: IEmployeeDetails) => {
    try {
      setLoading(true);
      const employeeDetails = {
        ...values,
        id: values.id ? values.id : generateUniqueKey(state.employees),
        dateOfBirth: moment(values.dateOfBirth, "YYYY-MM-DD").valueOf(),
        dateOfJoin: moment(values.dateOfJoin, "YYYY-MM-DD").valueOf(),
        imageURL: imageFile
          ? await uploadImage(imageFile as File)
          : values.imageURL,
        skill: selectedSkills.map((skill) => skill.id),
      };

      // Remove unnecessary field
      delete employeeDetails.actions;

      if (currentFormType === "edit") updateEmployee(employeeDetails);
      else addEmployee(employeeDetails);
    } catch (error) {
      toast.error("Error Uploading Image. Try Again.");
      console.log(error, "Error uploading Image");
    }
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
          src={
            imageFile
              ? URL.createObjectURL(imageFile as File)
              : initialEmployeeDetails.imageURL
          }
          removeSelectedImage={removeSelectedImage}
          handleImageInput={handleImageInput}
        />
        <Formik
          enableReinitialize
          initialValues={initialEmployeeDetails}
          validationSchema={employeeFormValidationSchema(currentFormType)}
          validateOnChange={false}
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
                type="text"
                placeholder="Enter email address"
              />
              <Input
                label="Temporary Password"
                name="password"
                type="password"
                placeholder="Enter a strong password"
                disabled={currentFormType === "edit"}
              />
            </div>
            <div className={style.inputGroup}>
              <Input
                label="Mobile Number"
                name="mobile"
                type="text"
                placeholder="Enter Mobile Number"
              />
              <Input label="Date of Birth" name="dateOfBirth" type="date" />
            </div>
            <div className={style.inputGroup}>
              <Select
                label="Work Location"
                name="workLocation"
                placeholder="Select work location"
                datas={workLocation}
              />
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
                placeholder="Search skills to add"
                listOfSkills={skills}
                searchInput={searchInput}
                handleInput={handleInput}
                handleSelectedSkills={handleSelectedSkills}
              />
              <SelectedSkills
                selectedSkills={selectedSkills}
                removeSelectedSkill={handleRemoveSelectedSkill}
              />
            </div>

            <div className={style.formButtons}>
              <Button btnType="secondary" onClick={() => navigate("/")}>
                Cancel
              </Button>
              <Button type="submit" loading={loading}>
                Submit
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </Fade>
  );
};

export default EmployeeForm;
