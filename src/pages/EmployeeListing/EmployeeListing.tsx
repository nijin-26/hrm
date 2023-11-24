// Components
import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/common/Listing/TableView";
import Button from "../../components/common/Button/Button";
import DeleteConfirmation from "../../components/Employee/DeleteConfirmation/DeleteConfirmation";
import Modal from "../../components/common/Modal/Modal";

// External Libraries
import { Tooltip } from "react-tooltip";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

// Constants/Data
import { employeeTableHeader } from "../../core/constants";

// Styles & Icons
import styles from "./style.module.scss";
import { GoFilter } from "react-icons/go";
import { BiUserPlus } from "react-icons/bi";

// React Hooks
import { MouseEvent, useEffect, useState } from "react";

// Store and API
import { useAppContext } from "../../core/store/AppContext";
import actionType from "../../core/store/actionTypes";
import { deleteData, getEmployeeData } from "../../core/api";
import { toast } from "react-toastify";
import Pagination from "../../components/common/Pagination/Pagination";

const EmployeeListing = () => {
  const [employeeId, setEmployeeId] = useState<string>("");
  const [toggleFilter, setToggleFilter] = useState(true);
  const [toggleDeleteModal, setToggleDeleteModal] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage, setemployeesPerPage] = useState(5);

  const { loading, state, dispatch } = useAppContext();
  const { sortBy, sortOrder } = state.filterSort;

  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
        if (e.key === "f" || e.key === "F") setToggleFilter((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const lastPostIndex = currentPage * employeesPerPage;
  const firstPostIndex = lastPostIndex - employeesPerPage;
  const currentListOfEmployees = state.filteredEmployees.slice(
    firstPostIndex,
    lastPostIndex
  );

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
    if (column === sortBy) {
      dispatch({
        type: actionType.SET_SORT_ORDER,
        payload: sortOrder === "asc" ? "desc" : "asc",
      });
    } else {
      dispatch({ type: actionType.SET_SORT_BY, payload: column });
      dispatch({ type: actionType.SET_SORT_ORDER, payload: "asc" });
    }
    dispatch({ type: actionType.FILTER_SORT_EMPLOYEES });
  };

  const handleEmployeeDelete = async (id: string) => {
    try {
      await deleteData(`/employee/${id}.json`);
      dispatch({ type: actionType.DELETE_EMPLOYEE, payload: id });
      toast.success("Employee deleted successfully.");
      setToggleDeleteModal(false);
      setEmployeeId("");
      dispatch({ type: actionType.FILTER_SORT_EMPLOYEES });
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
          setCurrentPage={(num) => setCurrentPage(num)}
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
