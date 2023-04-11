import * as React from "react";
import Link from "next/link";
import { Style } from "../../../lib/Style";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { useState } from "react";
import DestroyPosition from "../../../pages/users/positions/[id]/destroy";
import PositionEdit from "../../../pages/users/positions/[id]/edit";

export default function PositionDataTable(props: any) {
  const { position } = props

  const [editOpen, setEditOpen] = useState(
    position.reduce((num: { [x: string]: boolean; }, position: { id: string | number; }) => {
      num[position.id] = false
      return num
    }, {})
  )

  const [deleteOpen, setDeleteOpen] = useState(
    position.reduce((num: { [x: string]: boolean; }, position: { id: string | number; }) => {
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


  return (
    <div className="w-full">
      <table className="table-fixed bg-white-smoke w-full rounded-lg">
        <thead className={`${Style.toLeft}`}>
          <tr className="border-collapse ">
            <th className={`${Style.tableBorder}`}>ID</th>
            <th className={`${Style.tableBorder}`}>Name</th>
            <th className={`${Style.tableBorder}`}>Action</th>
          </tr>
        </thead>
        <tbody>
          {position.map((position: any, id: number) => {
            return (
              <tr key={id} className="border-collapse hover:bg-gray-200">
                <td className={`${Style.tableBorder}`}>
                  {position.id}
                </td>
                <td className={`${Style.tableBorder}`}>
                  {position.position}
                </td>
                <td className={`${Style.tableBorder}`}>
                  <div className="flex gap-3 items-center">
                    {/* <Link href={`/users/positions/${position.id}`}>
                      <BsEye className="hover:text-blue-600" />
                    </Link> */}
                    {/* <Link href={`/users/positions/${position.id}/edit`}>
                      <BsPencil className="hover:text-green-600" />
                    </Link> */}

                    <button onClick={e => {
                      handleEdit(position.id)
                    }}>
                      <BsPencil className="hover:text-green-600" />
                      <PositionEdit handleClosePosition={handleClosePosition} editOpen={editOpen[position.id]} position={position} key={selected} />
                    </button>

                    <button onClick={e => {
                      handleDelete(position.id)
                    }}>
                      <BsTrash className="hover:text-red-600" />
                      <DestroyPosition handleClosePosition={handleClosePosition} deleteOpen={deleteOpen[position.id]} position={position} key={selected} />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}


