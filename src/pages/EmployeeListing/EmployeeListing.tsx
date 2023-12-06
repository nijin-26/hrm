// Components
import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/common/Listing/TableView";
import Button from "../../components/common/Button/Button";
import DeleteConfirmation from "../../components/Employee/DeleteConfirmation/DeleteConfirmation";
import Modal from "../../components/common/Modal/Modal";
import Pagination from "../../components/common/Pagination/Pagination";

// External Libraries
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Constants/Data
import { employeeTableHeader } from "../../core/utils/constants";

// Styles & Icons
import styles from "./style.module.scss";
import { GoFilter } from "react-icons/go";
import { BiUserPlus } from "react-icons/bi";

// React Hooks
import { MouseEvent, useEffect, useState } from "react";

// Store and API
import actionType from "../../core/store/actionTypes";
import { deleteData, getEmployeeData } from "../../core/api";
import { useDispatch, useSelector } from "react-redux";
import { IAppContextState } from "../../core/interfaces/AppContextInterface";
import { Dispatch } from "redux";
import actionTypes from "../../core/store/actionTypes";
import { getArrayFromObjects } from "../../core/utils/getArrayFromObjects";

const EmployeeListing = () => {
  // State
  const [loading, setLoading] = useState(false);
  const [employeeId, setEmployeeId] = useState<string>("");
  const [toggleFilter, setToggleFilter] = useState(true);
  const [toggleDeleteModal, setToggleDeleteModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userSelectedPage, setUserSelectedPage] = useState(1);
  const [employeesPerPage] = useState(5);
  const [employeesLength, setEmployeesLength] = useState(0);

  const navigate = useNavigate();

  // Redux
  const state = useSelector((state: IAppContextState) => state);
  const dispatch = useDispatch<Dispatch>();
  const { sortBy, sortOrder } = state.filterSort;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getEmployeeData("/.json");
        if (response && response.employee) {
          setLoading(false);
          const employeeArr = getArrayFromObjects(response.employee);
          dispatch({
            type: actionTypes.SET_EMPLOYEES,
            payload: employeeArr,
          });
          dispatch({
            type: actionTypes.SET_FILTERED_EMPLOYEES,
            payload: employeeArr,
          });
          dispatch({
            type: actionTypes.SET_ROLES,
            payload: getArrayFromObjects(response.role),
          });
          dispatch({
            type: actionTypes.SET_DEPARTMENTS,
            payload: getArrayFromObjects(response.department),
          });
          dispatch({
            type: actionTypes.SET_SKILLS,
            payload: getArrayFromObjects(response.skill),
          });
        } else throw new Error("Response not found.");
      } catch (error) {
        setLoading(false);
        toast.error("Error fetching data. Try Again. Check your network.");
        console.error("Error fetching data:", error);
      }
    };

    if (!state.employees.length) fetchData();
  }, []);

  useEffect(() => {
    dispatch({
      type: actionType.FILTER_SORT_EMPLOYEES,
      payload: {
        employees: state.employees,
        filterSort: state.filterSort,
      },
    });
  }, [state.employees, state.filterSort]);

  // <<<<<< Event listeners for shortcuts >>>>>>>>>>>>
  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
        if (e.key === "f" || e.key === "F") setToggleFilter((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // <<<<<<<< Pagination logic >>>>>>>>>>>>>>>>
  useEffect(() => {
    if (state.filteredEmployees.length !== employeesLength) {
      if (state.filteredEmployees.length === state.employees.length) {
        setCurrentPage(userSelectedPage);
      } else {
        setCurrentPage(1);
      }
      setEmployeesLength(state.filteredEmployees.length);
    }
  }, [state.filteredEmployees, employeesLength, userSelectedPage]);

  const lastPostIndex = Math.min(
    currentPage * employeesPerPage,
    state.filteredEmployees.length
  );

  const firstPostIndex = lastPostIndex - employeesPerPage;
  const currentListOfEmployees = state.filteredEmployees.slice(
    firstPostIndex,
    lastPostIndex
  );

  // Event handlers
  const handlePageChange = (num: number) => {
    setCurrentPage(num);
    setUserSelectedPage(num);
  };

  const handleRowClick = (e: MouseEvent<HTMLElement>, id: string) => {
    const target = e.target as HTMLElement;
    if (target.closest("#edit")) navigate(`/edit/${id}`);
    if (target.closest("#delete")) {
      setToggleDeleteModal(true);
      setEmployeeId(id);
    }
    if (target.tagName === "TD") navigate(`/view/${id}`);
  };

  const handleSort = (column: string) => {
    console.log(state, "state from employee listing");
    if (column === sortBy) {
      dispatch({
        type: actionType.SET_SORT_ORDER,
        payload: sortOrder === "asc" ? "desc" : "asc",
      });
    } else {
      dispatch({ type: actionType.SET_SORT_BY, payload: column });
      dispatch({ type: actionType.SET_SORT_ORDER, payload: "asc" });
    }
  };

  const handleEmployeeDelete = async (id: string) => {
    try {
      await deleteData(`/employee/${id}.json`);
      dispatch({ type: actionType.DELETE_EMPLOYEE, payload: id });
      toast.success("Employee deleted successfully.");
      setToggleDeleteModal(false);
      setEmployeeId("");
    } catch (error) {
      toast.error("Error in deleting employee. Try Again");
    }
  };

  const handleModalClose = () => setToggleDeleteModal(false);

  return (
    <Fade>
      <div className={styles.employeeListingContainer}>
        <div className={styles.topbar}>
          <div className={styles.header}>
            <h1>Employees</h1>
            <GoFilter
              className="filter-toggle"
              size={36}
              onClick={() => setToggleFilter(!toggleFilter)}
            />
            <Tooltip
              anchorSelect=".filter-toggle"
              place="right"
              variant="info"
              content="Toggle Filter Options"
            />
          </div>
          <Button onClick={() => navigate("/add")}>
            <BiUserPlus size={32} />
          </Button>
        </div>
        {toggleFilter && (
          <Fade>
            <FilterOptions
              roles={state.roles}
              departments={state.departments}
            />
          </Fade>
        )}

        <TableView
          handleSort={handleSort}
          handleRowClick={handleRowClick}
          tableHeaders={employeeTableHeader}
          tableData={currentListOfEmployees}
          loading={loading}
        />

        <Pagination
          currentPage={currentPage}
          totalPosts={state.filteredEmployees.length}
          postsPerPage={employeesPerPage}
          setCurrentPage={(num) => handlePageChange(num)}
        />

        <Modal isOpen={toggleDeleteModal} handleModalClose={handleModalClose}>
          <DeleteConfirmation
            handleModalClose={handleModalClose}
            handleEmployeeDelete={handleEmployeeDelete}
            employeeId={employeeId}
          />
        </Modal>
      </div>
    </Fade>
  );
};
export default EmployeeListing;
