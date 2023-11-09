import { GoFilter } from "react-icons/go";
import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/common/Listing/TableView";
import { employeeTableHeader, employees } from "../../core/constants";
import { getEmployeeData } from "../../core/utils/getEmployeeData";

import styles from "./style.module.scss";
import { MouseEvent, useState } from "react";
import Button from "../../components/common/Button/Button";
import { BiUserPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Tooltip } from "react-tooltip";
import { ISkills } from "../../core/interfaces/Common";

const EmployeeListing = () => {
  const navigate = useNavigate();
  const [toggleFilter, setToggleFilter] = useState(true);
  const employeeData = getEmployeeData(employees);

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
        tableData={employeeData}
      />
    </div>
  );
};
export default EmployeeListing;
