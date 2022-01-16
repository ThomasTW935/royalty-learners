import { useMemo,useEffect,useState } from "react";
import TableStyle from "./Table.style";
import { useTable, useSortBy } from "react-table";
import { SortUp, SortDown } from "@styled-icons/fa-solid";
import useUser from "../../hooks/useUser"; 
import EditForm from "../../pages/dashboard/components/Form/EditForm"

export default function Table() {
  const [data,setData] = useState([])
  const {fetchUsers} = useUser()
  const [selectedID, setSelectedID] = useState(null)
  useEffect(()=>{
    async function fetchData() {
      const newData = await fetchUsers()
      setData(newData)
      console.log(newData)
    }
    fetchData();
  },[])
  const [editModal, setEditModal] = useState(false)
  function handleEdit(value){
    setSelectedID(value._id)
    setEditModal(true)
  }
  function handleDelete(){

  }
  const columns = useMemo(
    () => [
      { Header: "Username", accessor: "username" },
      { Header: "First Name", accessor: "firstName" },
      { Header: "Last Name", accessor: "lastName" },
      {
        Header: 'Actions',
        Cell: ({row}) => (
            <div>
                <TableStyle.TButton onClick={() => handleEdit(row.original)}>Edit</TableStyle.TButton>
                <TableStyle.TButton onClick={() => handleDelete(row.original)}>Delete</TableStyle.TButton>
            </div>
        )
     }
    ],
    []
  );
  

  const tableInstance = useTable({ columns, data }, useSortBy);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
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
    {editModal && <EditForm selectedID={selectedID}/>}
    </>
    
  );
}
