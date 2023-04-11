import * as React from "react";
import { Style } from "../../../lib/Style";
import { useState } from "react";
import DestroyPosition from "../../../pages/users/positions/[id]/destroy";
import PositionEdit from "../../../pages/users/positions/[id]/edit";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';


export default function PositionDataTable(props: any) {
  const { positions, currentPage, itemsPerPage } = props

  const [editOpen, setEditOpen] = useState(
    positions.reduce((num: { [x: string]: boolean; }, position: { id: string | number; }) => {
      num[position.id] = false
      return num
    }, {})
  )

  const [deleteOpen, setDeleteOpen] = useState(
    positions.reduce((num: { [x: string]: boolean; }, position: { id: string | number; }) => {
      num[position.id] = false
      return num
    }, {})
  )

  const [selected, setSelected] = useState(null)

  const handleDelete = (positionId: any) => {
    setSelected(positionId)
    setDeleteOpen((prev: any) => {
      return { ...prev, [positionId]: true }
    })
  }

  const handleEdit = (positionId: any) => {
    setSelected(positionId)
    setEditOpen((prev: any) => {
      return { ...prev, [positionId]: true }
    })
  }

  const handleClosePosition = (positionId: any) => {
    setSelected(null)
    setDeleteOpen((prev: any) => {
      console.log(prev, positionId)
      return { ...prev, [positionId]: false }
    })
    setEditOpen((prev: any) => {
      // console.log(prev, positionId)
      return { ...prev, [positionId]: false }
    })
  }

  let positionMap = (positions).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((position: any) => {
    console.log("hello", positions)
    return (
      <tbody key={position.id}>

        <tr className="border-collapse hover:bg-gray-200">
          <td className={`${Style.tableBorder}`}>
            {position.id}
          </td>
          <td className={`${Style.tableBorder}`}>
            {position.position}
          </td>
          <td className={`${Style.tableBorder}`}>
            <div className="flex gap-3 justify-center">

              <button onClick={e => {
                handleEdit(position.id)
              }}>
                <BorderColorRoundedIcon className={`${Style.edit}`} />
                <PositionEdit handleClosePosition={handleClosePosition} editOpen={editOpen[position.id]} position={position} key={selected} />
              </button>

              <button onClick={e => {
                handleDelete(position.id)
              }}>
                <DeleteRoundedIcon className={`${Style.delete}`} />
                <DestroyPosition handleClosePosition={handleClosePosition} deleteOpen={deleteOpen[position.id]} position={position} key={selected} />
              </button>
            </div>
          </td>
        </tr>
      </tbody>


    );
  })

  return (
    <div className={`w-full`}>
      <div className={`text-center`}>Position List</div>
      <table className={`table-fixed w-full`}>
        <thead className={`bg-gray-500 text-white`}>
          <tr className="border-collapse ">
            <th className={`${Style.tableBorder}`}>ID</th>
            <th className={`${Style.tableBorder}`}>Name</th>
            <th className={`${Style.tableBorder}`}>Action</th>
          </tr>
        </thead>
        {positionMap}
      </table>
    </div>

  )

}


