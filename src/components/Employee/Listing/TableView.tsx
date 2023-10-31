interface employeeDetail {
  id: string;
  fullName: string;
  email: string;
  date: number;
}

const TableRow = ({ id, fullName, email, date }: employeeDetail) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{fullName}</td>
      <td>{email}</td>
      <td>{date}</td>
    </tr>
  );
};

const TableView = ({ employees }: { employees: employeeDetail[] }) => {
  return (
    <table>
      <thead>
        <th>ID</th>
        <th>Full Name</th>
        <th>Email</th>
        <th>Hire Date</th>
        <th>Actions</th>
      </thead>
      <tbody>
        {employees.map((employee: employeeDetail) => (
          <TableRow {...employee} />
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
