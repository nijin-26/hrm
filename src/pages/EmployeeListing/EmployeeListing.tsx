import { EmployeeListingWrapper } from "./EmployeeListing.style";

import FilterOptions from "../../components/Employee/FilterOptions/FilterOptions";
import TableView from "../../components/Employee/Listing/TableView";
import { employeeTableHeader, employees } from "../../core/constants";
import { getFormattedDate } from "../../core/utils/formatDate";
import { BiEdit, BiUserMinus } from "react-icons/bi";

const EmployeeListing = () => {
  const employeeData = employees.map((employee) => {
    return {
      ...employee,
      dateOfJoin: getFormattedDate(employee.dateOfJoin as number)[0],
      actions: (
        <div className="action-btn-container">
          <span>
            <BiEdit />
          </span>
          <span>
            <BiUserMinus />
          </span>
        </div>
      ),
    };
  });

  return (
    <EmployeeListingWrapper>
      <FilterOptions />
      <TableView tableHeaders={employeeTableHeader} tableData={employeeData} />
    </EmployeeListingWrapper>
  );
};
export default EmployeeListing;
