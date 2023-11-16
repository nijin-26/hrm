import { GoFilter } from "react-icons/go";
import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/common/Listing/TableView";
import { employeeTableHeader } from "../../core/constants";

import styles from "./style.module.scss";
import { MouseEvent, useEffect, useState } from "react";
import Button from "../../components/common/Button/Button";
import { BiUserPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
import { useAppContext } from "../../core/store/AppContext";
import actionType from "../../core/store/actionTypes";
import DeleteConfirmation from "../../components/Employee/DeleteConfirmation/DeleteConfirmation";
import Modal from "../../components/common/Modal/Modal";
import { deleteData, getData } from "../../core/api";

const EmployeeListing = () => {
  const [employeeId, setEmployeeId] = useState<string>("");
  const [toggleFilter, setToggleFilter] = useState(true);
  const [toggleDeleteModal, setToggleDeleteModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { state, dispatch } = useAppContext();
  const { sortBy, sortOrder } = state.filterSort;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getData("/.json");
        if (response && response.employee) {
          setLoading(false);
          dispatch({
            type: actionType.SET_ALL_DATA,
            payload: response,
          });
        } else console.log("Response not found");
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      setToggleDeleteModal(false);
      setEmployeeId("");
      dispatch({ type: actionType.FILTER_SORT_EMPLOYEES });
    } catch (error) {
      console.log(error, "Error on deleting the employee");
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
          tableData={state.filteredEmployees}
          loading={loading}
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
