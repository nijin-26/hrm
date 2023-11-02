import { EmployeeListingWrapper } from "./EmployeeListing.style";

import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/Employee/Listing/TableView";

const EmployeeListing = () => {
  let employeeList = [
    { id: "R1", fullName: "Nijin", email: "Nijin@gmail.com", date: 232 },
    { id: "R1", fullName: "Nijin", email: "Nijin@gmail.com", date: 232 },
  ];

  return (
    <EmployeeListingWrapper>
      <FilterOptions />
      <TableView employees={employeeList} />
    </EmployeeListingWrapper>
  );
};

export default EmployeeListing;
