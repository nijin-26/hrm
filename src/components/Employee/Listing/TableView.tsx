import { BiEdit, BiUserMinus } from "react-icons/bi";

import { TableWrapper } from "./listing.styles";
import { IEmployeeDetails } from "../../../core/interfaces/interfaces";

const TableRow = ({ id, fullName, email, date }: IEmployeeDetails) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{date}</td>
      <td className="action-btn-container">
        <span>
          <BiEdit />
        </span>
        <span>
          <BiUserMinus />
        </span>
      </td>
    </tr>
  );
};

const TableView = ({ employees }: { employees: IEmployeeDetails[] }) => {
  return (
    <TableWrapper>
      <table>
        <thead>
          <th>ID</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Hire Date</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {employees.map((employee: IEmployeeDetails) => (
            <TableRow {...employee} />
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default TableView;
