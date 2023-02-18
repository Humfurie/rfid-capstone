import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import axios from "axios";

export default function YearLevelDataTable() {
  const [rows, setRows] = React.useState([])

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "year", headerName: "Year", width: 130 },
    { field: "actions", headerName: "Actions", width: 130, renderCell: () => {
      return (
        <>
          <button className="bg-yellow">View</button>
          <button className="bg-blue">Edit</button>
          <button className="bg-red">Delete</button>
        </>
      )
    } },
  ];

  React.useMemo(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/year_level`)
    .then((res) => 
      {
      const data = res.data
      console.log(data)
      setRows(data)
    })
  },[])

  const pageOptions = [
    5,10,25,50,100
  ]


  console.log(rows)
  return (
    <div style={{ height: 600, width: "100%" }}>
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
