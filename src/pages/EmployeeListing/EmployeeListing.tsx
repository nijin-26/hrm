import { EmployeeListingWrapper } from "./EmployeeListing.style";

import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/Employee/Listing/TableView";

const EmployeeListing = () => {
  return (
    <EmployeeListingWrapper>
      <FilterOptions />
      <TableView
        employees={[
          { id: "R1", fullName: "Nijin", email: "Nijin@gmail.com", date: 232 },
          { id: "R1", fullName: "Nijin", email: "Nijin@gmail.com", date: 232 },
        ]}
      />
    </EmployeeListingWrapper>
  );
};

export default EmployeeListing;
