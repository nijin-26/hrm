import { GoFilter } from "react-icons/go";
import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/Employee/Listing/TableView";
import { employeeTableHeader, employees } from "../../core/constants";
import { getEmployeeData } from "../../core/utils/getEmployeeData";

import styles from "./style.module.scss";
import { useState } from "react";
import Button from "../../components/common/Button/Button";
import { BiUserPlus } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const EmployeeListing = () => {
  const navigate = useNavigate();
  const [toggleFilter, setToggleFilter] = useState(false);
  const employeeData = getEmployeeData(employees);

  return (
    <div className={styles.employeeListingContainer}>
      <div className={styles.topbar}>
        <div className={styles.header}>
          <h1>Employees</h1>
          <GoFilter size={36} onClick={() => setToggleFilter(!toggleFilter)} />
        </div>
        <Button onClick={() => navigate("/add")}>
          <BiUserPlus size={32} />
        </Button>
      </div>
      {toggleFilter && (
        <FilterOptions
          handleToggleFilter={() => setToggleFilter(!toggleFilter)}
        />
      )}
      <TableView tableHeaders={employeeTableHeader} tableData={employeeData} />
    </div>
  );
};
export default EmployeeListing;
