import * as React from "react";
import Link from "next/link";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { Style } from "../../../lib/Style";
import { useState } from "react";
import DestroyYearLevel from "../../../pages/users/yearLevel/[id]/destroy";
import YearLevelEdit from "../../../pages/users/yearLevel/[id]/edit";

export default function YearLevelDataTable(props: any) {
  const { yearLevel } = props

  const [editOpen, setEditOpen] = useState(
    yearLevel.reduce((num: { [x: string]: boolean; }, yearLevel: { id: string | number; }) => {
      num[yearLevel.id] = false
      return num
    }, {})
  )
  const [deleteOpen, setDeleteOpen] = useState(
    yearLevel.reduce((num: { [x: string]: boolean; }, yearLevel: { id: string | number; }) => {
      num[yearLevel.id] = false
      return num
    }, {})
  )

  const [selected, setSelected] = useState(null)

  const handleDelete = (yearLevelId: any) => {
    setSelected(yearLevelId)
    setDeleteOpen((prev: any) => {
      return { ...prev, [yearLevelId]: true }
    })
  }

  const handleEdit = (yearLevelId: any) => {
    setSelected(yearLevelId)
    setEditOpen((prev: any) => {
      return { ...prev, [yearLevelId]: true }
    })
  }

  const handleCloseYearLevel = (yearLevelId: any) => {
    setSelected(null)
    setDeleteOpen((prev: any) => {
      return { ...prev, [yearLevelId]: false }
    })
    setEditOpen((prev: any) => {
      return { ...prev, [yearLevelId]: false }
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
          {yearLevel.map((yearLevel: any, id: number) => {

            return (
              <tr key={id} className="border-collapse even:bg-white odd:bg-white-smoke hover:bg-gray-200">
                <td className={`${Style.tableBorder}`}>
                  {yearLevel.id}
                </td>
                <td className={`${Style.tableBorder}`}>
                  {yearLevel.year}
                </td>
                <td className={`${Style.tableBorder}`}>
                  <div className="flex gap-3 items-center">
                    {/* <Link href={`/users/yearLevel/${yearLevel.id}`}>
                      <BsEye className="hover:text-blue-600" />
                    </Link> */}
                    {/* <Link href={`/users/yearLevel/${yearLevel.id}/edit`}>
                      <BsPencil className="hover:text-green-600" />
                    </Link> */}
                    <button onClick={e => {
                      handleEdit(yearLevel.id)
                    }}>
                      <BsPencil className="hover:text-green-600" />
                      <YearLevelEdit handleCloseYearLevel={handleCloseYearLevel} editOpen={editOpen[yearLevel.id]} yearLevel={yearLevel} key={selected} />
                    </button>
                    {/* <Link href={`/users/yearLevel/${yearLevel.id}/delete`}>
                      <BsTrash className="hover:text-red-600" />
                    </Link> */}
                    <button onClick={e => {
                      handleDelete(yearLevel.id)
                    }}>
                      <BsTrash className="hover:text-red-600" />
                      <DestroyYearLevel handleCloseDelete={handleCloseYearLevel} deleteOpen={deleteOpen[yearLevel.id]} yearLevel={yearLevel} key={selected} />
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

