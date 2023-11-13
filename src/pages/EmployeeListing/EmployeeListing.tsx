import { GoFilter } from "react-icons/go";
import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/common/Listing/TableView";
import {
  departments,
  employeeTableHeader,
  employees,
  roles,
  skillList,
} from "../../core/constants";

import styles from "./style.module.scss";
import { MouseEvent, useEffect, useState } from "react";
import Button from "../../components/common/Button/Button";
import { BiUserPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
import { useAppContext } from "../../core/store/AppContext";
import actionType from "../../core/store/actionTypes";

const EmployeeListing = () => {
  const [toggleFilter, setToggleFilter] = useState(true);
  const { state, dispatch } = useAppContext();
  const { sortBy, sortOrder } = state.filterSort;

  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Fetch employees
    if (state.employees.length === 0)
      dispatch({ type: actionType.SET_EMPLOYEES, payload: employees });

    dispatch({ type: actionType.SET_FILTERED_EMPLOYEES });

    //TODO: Fetch Departments & Roles
    dispatch({ type: actionType.SET_DEPARTMENTS, payload: departments });
    dispatch({ type: actionType.SET_ROLES, payload: roles });
    dispatch({ type: actionType.SET_SKILLS, payload: skillList });
  }, []);

  const handleRowClick = (e: MouseEvent<HTMLElement>, id: string) => {
    const target = e.target as HTMLElement;
    if (target.closest("#edit")) navigate(`/edit/${id}`);
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
        />
      </div>
    </Fade>
  );
};
export default EmployeeListing;
