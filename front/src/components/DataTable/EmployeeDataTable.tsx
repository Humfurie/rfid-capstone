import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function EmployeeDataTable() {
  const [rows, setRows] = React.useState([])

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "Name", width: 130 },
    { field: "contact_number", headerName: "Contact Number", width: 130 },
    {
      field: "actions", headerName: "Actions", width: 130, renderCell: () => {
        return (
          <>
          <div>
            <button className="bg-yellow-700 text-white">View</button>
          </div>
          <div>
            <button className="bg-blue-700  text-white">Edit</button>
          </div>
          <div>
            <button className="bg-red-700  text-white">Delete</button>
          </div>
          </>
        )
      }
    },
  ];

  React.useMemo(() => {
    axios.get(`http://127.0.0.1:3333/api/users/employeeIndex`)
      .then((res) => {
        const data = res.data.user
        console.log(data)
        setRows(data)
      })
  }, [])

  const pageOptions = [
    5, 10, 25, 50, 100
  ]


  console.log(rows)
  return (
    <div
      className='flex flex-row justify-evenly h-screen w-screen'
    >
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={pageOptions}
      />
    </div>
  );
}


// export const getStaticProps: GetStaticProps = async () => {
//   const res = await axios.get(`http://127.0.0.1:3333/api/users/index`);

//   return { props: { users: res } };
// };
