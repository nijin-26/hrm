import { EmployeeListingWrapper } from "./EmployeeListing.style";

import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/Employee/Listing/TableView";
import { employees } from "../../core/constants";

const EmployeeListing = () => {
  return (
    <EmployeeListingWrapper>
      <FilterOptions />
      <TableView employees={employees} />
    </EmployeeListingWrapper>
  );
};

export default EmployeeListing;
