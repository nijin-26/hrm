import { TableWrapper } from "./listing.styles";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { ITableViewProps } from "../../../core/interfaces/Common";
import { useAppContext } from "../../../core/store/AppContext";

const TableView = <T, U>({
  tableHeaders,
  tableData,
  handleSort,
  handleRowClick,
}: ITableViewProps<T, U>) => {
  const { state } = useAppContext();
  const { sortBy, sortOrder } = state.filterSort;

  const handleCurrentSortIcon = () => {
    if (sortOrder === "asc") return <TiArrowSortedDown size={24} />;
    else return <TiArrowSortedUp size={24} />;
  };

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
                <div>
                  <span>{header.name}</span>
                  {header.isSortable && sortOrder && sortBy === header.id ? (
                    <span>{handleCurrentSortIcon()}</span>
                  ) : null}
                </div>
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
          {tableData.length === 0 && (
            <tr className="not-found">
              <td colSpan={tableHeaders.length}>Employee not found</td>
            </tr>
          )}
        </tbody>
      </table>
    </TableWrapper>
  );
};

export default TableView;
