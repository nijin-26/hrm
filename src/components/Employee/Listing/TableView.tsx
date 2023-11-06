import { TableWrapper } from "./listing.styles";
import { ITableViewProps } from "../../../core/interfaces/interfaces";
import { employeeTableHeader } from "../../../core/constants";
import { useNavigate } from "react-router-dom";
import { MouseEventHandler } from "react";

const TableRow = ({ rowData }: { rowData: any }) => {
  const navigate = useNavigate();

  const handleRowClick: MouseEventHandler<HTMLTableRowElement> = (e) => {
    const target = e.target as HTMLElement;
    if (target.closest("#edit")) navigate(`/edit/${rowData.id}`);
    if (target.tagName === "TD") navigate(`/view/${rowData.id}`);
  };

  return (
    <tr onClick={handleRowClick}>
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
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header: any) => (
              <th key={header.id}>{header.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((data: any) => (
            <TableRow key={data.id} rowData={data} />
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default TableView;
