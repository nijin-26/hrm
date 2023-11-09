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
import { ISkills } from "../../core/interfaces/Common";
import { useAppContext } from "../../core/store/AppContext";
import actionType from "../../core/store/actionTypes";

const EmployeeListing = () => {
  const [toggleFilter, setToggleFilter] = useState(true);
  const { state, dispatch } = useAppContext();

  const navigate = useNavigate();

  const employees =
    state.filteredEmployees.length === 0
      ? state.employees
      : state.filteredEmployees;

  useEffect(() => {
    dispatch({ type: actionType.FETCH_EMPLOYEES });
  }, []);

  const handleFilters = (
    department: string,
    role: string,
    skills: ISkills[]
  ) => {};

  const handleRowClick = (e: MouseEvent<HTMLElement>, id: string) => {
    const target = e.target as HTMLElement;
    if (target.closest("#edit")) navigate(`/edit/${id}`);
    if (target.tagName === "TD") navigate(`/view/${id}`);
  };

  return (
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
            handleFilterChange={handleFilters}
            handleToggleFilter={() => setToggleFilter(!toggleFilter)}
          />
        </Fade>
      )}
      <TableView
        handleRowClick={handleRowClick}
        tableHeaders={employeeTableHeader}
        tableData={employees}
      />
    </div>
  );
};
export default EmployeeListing;
