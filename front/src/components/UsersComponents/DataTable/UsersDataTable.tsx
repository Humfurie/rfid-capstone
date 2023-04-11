import * as React from "react";
import Link from "next/link";
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Destroy from "../../../pages/users/destroy";
import { Style } from "../../../lib/Style";
import { useState } from "react";


export default function UsersDataTable(props: any) {
  const { users, currentPage, itemsPerPage } = props

  const [deleteOpen, setDeleteOpen] = useState(
    users.reduce((num: { [x: string]: boolean; }, position: { id: string | number; }) => {
      num[position.id] = false
      return num
    }, {})
  )
  const handleDelete = (positionId: any) => {
    setDeleteOpen((prev: any) => {
      return { ...prev, [positionId]: true }
    })
  }

  const handleClosePosition = (positionId: any) => {
    setDeleteOpen((prev: any) => {
      return { ...prev, [positionId]: false }
    })
  }

  let userMap = (users).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((user: any) => {

    const role = user.role[0].role.toLowerCase()
    return (
      <tbody key={user.id}>
        <tr className="border-collapse hover:bg-gray-200">
          <td className={`${Style.tableBorder}`}>
            {user.id}
          </td>

          <td className={`${Style.tableBorder}`}>
            {user.first_name} {user.last_name}
          </td>

          <td className={`${Style.tableBorder}`}>
            {user.contact_number}
          </td>
          
          <td className={`${Style.tableBorder}`}>
            <div className="flex gap-3 items-center">

              <Link href={`/users/${role}/${user.id}`} >
                <RemoveRedEyeRoundedIcon className={`${Style.view}`} />
              </Link>

              <Link href={`/users/${role}/${user.id}/edit`} >
                <BorderColorRoundedIcon className={`${Style.edit}`} />
              </Link>

              <button onClick={e => {
                handleDelete(user.id)
              }}>
                <DeleteRoundedIcon className={`${Style.delete}`} />
                <Destroy setOpen={handleClosePosition} open={deleteOpen[user.id]} user={user} userRole={role} />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    )
  })

  // const role = users?.role[0]?.role.toLowerCase()
  // console.log(role)
 
  return (
    <div className={`w-full`}>
      {/* <div className={`text-center`}>
        {role === "employee" ? "Employee List" : role === "student" ? "Student List" : ""}
      
      </div> */}
      <table className={`table-fixed w-full`}>
        <thead className={`bg-gray-500 text-white`}>
          <tr className="border-collapse ">
            <th className={`${Style.tableBorder}`}>ID</th>
            <th className={`${Style.tableBorder}`}>Name</th>
            <th className={`${Style.tableBorder}`}>Contact Number</th>
            <th className={`${Style.tableBorder}`}>Action</th>
          </tr>
        </thead>
        {userMap}
      </table>
    </div>

  );
}

