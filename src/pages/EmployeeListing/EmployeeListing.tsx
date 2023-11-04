import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/Employee/Listing/TableView";
import { employeeTableHeader, employees } from "../../core/constants";
import { getEmployeeData } from "../../core/utils/getEmployeeData";

import styles from "./style.module.scss";

const EmployeeListing = () => {
  const employeeData = getEmployeeData(employees);

  return (
    <div className={styles.employeeListingContainer}>
      <FilterOptions />
      <TableView tableHeaders={employeeTableHeader} tableData={employeeData} />
    </div>
  );
};
export default EmployeeListing;
