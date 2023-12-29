import { TableWrapper } from "./listing.styles";

// Icons
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";

// Interfaces
import {
  ITableViewProps,
  TableDataType,
} from "../../../core/interfaces/Common";

import { Loader } from "../Loader/Loader";
import { useSelector } from "react-redux";
import { IAppContextState } from "../../../core/interfaces/AppContextInterface";

const TableView = ({
  tableHeaders,
  tableData,
  handleSort,
  handleRowClick,
  loading,
}: ITableViewProps) => {
  const filterSort = useSelector((state: IAppContextState) => state.filterSort);
  const { sortBy, sortOrder } = filterSort;

  const handleCurrentSortIcon = () => {
    if (sortOrder === "asc") return <TiArrowSortedDown size={24} />;
    else return <TiArrowSortedUp size={24} />;
  };

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th
                onClick={() => header.isSortable && handleSort(header.id)}
                key={header.id}
              >
                <div>
                  <span>{header.name}</span>
                  {header.isSortable && sortOrder && sortBy == header.id ? (
                    <span>{handleCurrentSortIcon()}</span>
                  ) : (
                    header.isSortable &&
                    sortBy !== header.id && (
                      <span>
                        <TiArrowUnsorted />
                      </span>
                    )
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr className="not-found">
              <td colSpan={tableHeaders.length}>
                <Loader />
              </td>
            </tr>
          ) : (
            tableData.map((rowData) => (
              <tr
                key={rowData.id}
                onClick={(e) => handleRowClick(e, rowData.id)}
              >
                {tableHeaders.map((header) => (
                  <td key={header.id}>
                    {rowData[header.id as keyof TableDataType] as string}
                  </td>
                ))}
              </tr>
            ))
          )}
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
