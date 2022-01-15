import { useMemo,useEffect,useState } from "react";
import TableStyle from "./Table.style";
import { useTable, useSortBy } from "react-table";
import { SortUp, SortDown } from "@styled-icons/fa-solid";
import useUser from "../../hooks/useUser"; 

export default function Table() {
  const [data,setData] = useState([])
  const {fetchUsers} = useUser()
  useEffect(()=>{
    async function fetchData() {
      const newData = await fetchUsers()
      setData(newData)
      console.log(newData)
    }
    fetchData();
  },[])

  const columns = useMemo(
    () => [
      { Header: "Username", accessor: "username" },
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
    ],
    []
  );
  

  const tableInstance = useTable({ columns, data }, useSortBy);

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
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <SortDown size={20} />
                    ) : (
                      <SortUp size={20} />
                    )
                  ) : (
                    ""
                  )}
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
                  <TableStyle.TData {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </TableStyle.TData>
                );
              })}
            </TableStyle.TRow>
          );
        })}
      </TableStyle.TBody>
    </TableStyle>
  );
}
