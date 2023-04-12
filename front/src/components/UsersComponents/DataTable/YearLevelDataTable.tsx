import * as React from "react";
import { Style } from "../../../lib/Style";
import { useState } from "react";
import DestroyYearLevel from "../../../pages/users/yearLevel/[id]/destroy";
import YearLevelEdit from "../../../pages/users/yearLevel/[id]/edit";
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

export default function YearLevelDataTable(props: any) {
  const { yearLevels, currentPage, itemsPerPage } = props

  const [editOpen, setEditOpen] = useState(
    yearLevels.reduce((num: { [x: string]: boolean; }, yearLevel: { id: string | number; }) => {
      num[yearLevel.id] = false
      return num
    }, {})
  )
  const [deleteOpen, setDeleteOpen] = useState(
    yearLevels.reduce((num: { [x: string]: boolean; }, yearLevel: { id: string | number; }) => {
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

  let yearLevelMap = (yearLevels).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((yearLevel: any) => {
    
    return (
      <tbody key={yearLevel.id}>

        <tr className="border-collapse hover:bg-gray-200">
          <td className={`${Style.tableBorder}`}>
            {yearLevel.id}
          </td>
          <td className={`${Style.tableBorder}`}>
            {yearLevel.year}
          </td>
          <td className={`${Style.tableBorder}`}>
            <div className="flex gap-3 justify-center">

              <button onClick={e => {
                handleEdit(yearLevel.id)
              }}>
                <BorderColorRoundedIcon className={`${Style.edit}`} />
                <YearLevelEdit handleCloseYearLevel={handleCloseYearLevel} editOpen={editOpen[yearLevel.id]} yearLevel={yearLevel} key={selected} />
              </button>

              <button onClick={e => {
                handleDelete(yearLevel.id)
              }}>
                <DeleteRoundedIcon className={`${Style.delete}`}/>
                <DestroyYearLevel handleCloseDelete={handleCloseYearLevel} deleteOpen={deleteOpen[yearLevel.id]} yearLevel={yearLevel} key={selected} />
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
            <th className={`${Style.tableBorder}`}>Name</th>
            <th className={`${Style.tableBorder}`}>Action</th>
          </tr>
        </thead>
        {yearLevelMap}
      </table>
    </div>
  )
}

