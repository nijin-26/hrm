import { TableWrapper } from "./listing.styles";
import { ITableViewProps } from "../../../core/interfaces/Common";

const TableView = <T, U>({
  tableHeaders,
  tableData,
  handleSort,
  handleRowClick,
}: ITableViewProps<T, U>) => {
  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header: any) => (
              <th
                onClick={() => header.isSortable && handleSort(header.id)}
                key={header.id}
              >
                {header.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData: any) => (
            <tr key={rowData.id} onClick={(e) => handleRowClick(e, rowData.id)}>
              {tableHeaders.map((header: any) => (
                <td key={header.id}>{rowData[header.id]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default TableView;
