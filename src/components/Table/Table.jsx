import {useMemo} from 'react'
import TableStyle from './Table.style'
import {useTable,useSortBy} from 'react-table'
import {SortUp,SortDown} from "@styled-icons/fa-solid" 


export default function Table() {

  const data = useMemo(
    () => [
      {
        firstName: "Daryl",
        lastName: "Thomas",
      },
      {
        firstName: "John",
        lastName: "Doe",
      },
      {
        firstName: "Jane",
        lastName: "Doe",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        isVisible: false,
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data },useSortBy);


  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  tableInstance;

  return (
    <TableStyle {...getTableProps()}>
       <TableStyle.THead>
            {headerGroups.map((headerGroup) => (
              <TableStyle.TRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableStyle.THeader
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      borderBottom: "solid 3px red",
                      background: "aliceblue",
                      color: "black",
                      fontWeight: "bold",
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <SortDown size={20}/>
                          : <SortUp size={20}/>
                        : ""}
                    </span>
                  </TableStyle.THeader>
                ))}
              </TableStyle.TRow>
            ))}
          </TableStyle.THead>
          <TableStyle.TBody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <TableStyle.TRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <TableStyle.TData
                        {...cell.getCellProps()}
                        style={{
                          padding: "10px",
                          border: "solid 1px gray",
                          background: "papayawhip",
                        }}
                      >
                        {cell.render("Cell")}
                      </TableStyle.TData>
                    );
                  })}
                </TableStyle.TRow>
              );
            })}
          </TableStyle.TBody>
    </TableStyle>
  )
}
