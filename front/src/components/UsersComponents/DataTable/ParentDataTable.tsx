import Link from "next/link";
import { useState } from "react";
import { Style } from "../../../lib/Style";
import DestroyParent from "../../../pages/users/parent/[id]/destroy";
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Avatar from "@mui/material/Avatar";
import { blue, grey, yellow } from "@mui/material/colors";

const ParentDatatable = (props: any) => {
  const { users, currentPage, itemsPerPage } = props

  const [deleteOpen, setDeleteOpen] = useState(
    users.reduce((num: { [x: string]: boolean; }, position: { id: string | number; }) => {
      num[position.id] = false
      return num
    }, {})
  )
console.log("ehe",deleteOpen)
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

  let parentMap = (users).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((user: any) => {
    
    return (
      <tbody key={user.id}>
        <tr className={`border-collapse  hover:bg-slate-100`}>
          <td className={`${Style.tableBorder}`}>
            {user.id}
          </td>

          <td className={`${Style.tableBorder} `}>
            <Avatar alt={`${user.first_name} `} src={`${process.env.NEXT_PUBLIC_API_URL + user.profilePic?.url}`} sx={{ bgcolor: yellow[100], color: grey[700] }} />
          </td>

          <td className={`${Style.tableBorder}`}>
            {user.first_name} {user.last_name}
          </td>

          <td className={`${Style.tableBorder}`}>
            {user.contact_number}
          </td>
          <td className={`${Style.tableBorder}`}>
            <div className={`flex gap-3 justify-center `}>

              <Link href={`/users/parent/${user.id}`}>
                <RemoveRedEyeRoundedIcon className={`${Style.view}`} />
              </Link>

              <Link href={`/users/parent/${user.id}/edit`}>
                <BorderColorRoundedIcon className={`${Style.edit}`} />
              </Link>

              <button onClick={e => {
                handleDelete(user.id)
              }}
              >
                <DeleteRoundedIcon className={`${Style.delete}`} />
                <DestroyParent setOpen={handleClosePosition} open={deleteOpen[user.id]} user={user} />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    )
  })

  return (
    <div className={`w-full`}>
      <table className={`table-fixed w-full`}>
        <thead className={`bg-gray-500 text-white`}>
          <tr className="border-collapse ">
            <th className={`${Style.tableBorder}`}>ID</th>
            <th className={`${Style.tableBorder}`}>Profile Picture</th>
            <th className={`${Style.tableBorder}`}>Name</th>
            <th className={`${Style.tableBorder}`}>Contact Number</th>
            <th className={`${Style.tableBorder}`}>Action</th>
          </tr>
        </thead>
        {parentMap}
      </table>
    </div>
  );
}

export default ParentDatatable;