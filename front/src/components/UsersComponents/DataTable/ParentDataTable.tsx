import Link from "next/link";
import { SetStateAction, useState } from "react";
import { BsPencil, BsEye, BsTrash } from "react-icons/bs";
import { Style } from "../../../lib/Style";
import DestroyParent from "../../../pages/users/parent/[id]/destroy";
import { Pagination } from "@mui/material";


const ParentDatatable = (props: any) => {
  const { users } = props

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

  const itemsPerPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(users.length / itemsPerPage)
  const handleChangePage = (_event: any, newPage: SetStateAction<number>) => {
    setCurrentPage(newPage)
  }

  let parentMap = (users).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((user: any) => {
    return (
        <tbody key={user.id}>
          <tr className="border-collapse even:bg-white odd:bg-white-smoke hover:bg-gray-200">
            <td className={`${Style.tableBorder}`}> {user.id} </td>

            <td className={`${Style.tableBorder}`}> {user.first_name} {user.last_name} </td>

            <td className={`${Style.tableBorder}`}> {user.contact_number} </td>
            <td className={`${Style.tableBorder}`}>
              <div className="flex gap-3 items-center w-full">
                <Link href={`/users/parent/${user.id}`}> <BsEye className="hover:text-blue-600" /> </Link>

                <Link href={`/users/parent/${user.id}/edit`}> <BsPencil className="hover:text-green-600" /> </Link>

                <button onClick={e => {
                  handleDelete(user.id)
                }}
                >
                  <BsTrash className="hover:text-red-600" />
                  <DestroyParent setOpen={handleClosePosition} open={deleteOpen[user.id]} user={user} />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
    )
  })

  return (
    <div className="w-full">
      <Pagination
        // className="mx-auto"
        count={totalPages}
        page={currentPage}
        onChange={handleChangePage}
        variant="outlined" color="primary" />
      <table className="table-fixed bg-white-smoke w-full rounded-lg">
        <thead className={`${Style.toLeft}`}>
          <tr className="border-collapse ">
            <th className={`${Style.tableBorder}`}>ID</th>
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