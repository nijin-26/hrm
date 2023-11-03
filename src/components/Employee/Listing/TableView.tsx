import { TableWrapper } from "./listing.styles";
import { ITableViewProps } from "../../../core/interfaces/interfaces";
import { employeeTableHeader } from "../../../core/constants";

const TableRow = ({ rowData }: { rowData: any }) => {
  return (
    <tr>
      {employeeTableHeader.map((header) => (
        <td key={header.id}>{rowData[header.id]}</td>
      ))}
    </tr>
  );
};

const TableView = <T, U>({
  tableHeaders,
  tableData,
}: ITableViewProps<T, U>) => {
  console.log(tableData);
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header: any) => (
              <th>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data: any) => (
            <TableRow rowData={data} />
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default TableView;
