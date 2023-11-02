import { BiEdit, BiUserMinus } from "react-icons/bi";

import { TableWrapper } from "./listing.styles";
import { IEmployeeDetails } from "../../../core/interfaces/interfaces";
import { getFormattedDate } from "../../../core/utils/formatDate";
import { employeeTableHeader } from "../../../core/constants";
import React from "react";

const TableRow = ({ emp }: { emp: IEmployeeDetails }) => {
  return (
    <tr>
      {employeeTableHeader.map((header) => (
        <React.Fragment key={header.id}>
          {header.id === "actions" ? (
            <td className="action-btn-container">
              <span>
                <BiEdit />
              </span>
              <span>
                <BiUserMinus />
              </span>
            </td>
          ) : (
            <td>
              {
                header.id === "dateOfJoin"
                  ? getFormattedDate(emp.dateOfJoin as number)[0]
                  : emp[header.id] || "" // Provide a default value if emp[header.id] is falsy
              }
            </td>
          )}
        </React.Fragment>
      ))}
    </tr>
  );
};

const TableView = ({ employees }: { employees: IEmployeeDetails[] }) => {
  return (
    <TableWrapper>
      <table>
        <thead>
          {employeeTableHeader.map((header) => (
            <th>{header.name}</th>
          ))}
        </thead>
        <tbody>
          {employees.map((employee: IEmployeeDetails) => (
            <TableRow emp={employee} />
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default TableView;
