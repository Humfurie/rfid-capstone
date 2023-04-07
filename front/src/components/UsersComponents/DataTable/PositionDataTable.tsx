import * as React from "react";
import Link from "next/link";
import { Style } from "../../../lib/Style";
import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
import { useState } from "react";
import DestroyPosition from "../../../pages/users/positions/[id]/destroy";
import PositionEdit from "../../../pages/users/positions/[id]/edit";

export default function PositionDataTable(props: any) {
  const { position } = props

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

            const [open, setOpen] = useState(false)
            const [ editOpen, setEditOpen ] = useState(false)

            return (
              <tr key={id} className="border-collapse even:bg-white odd:bg-white-smoke hover:bg-gray-200">
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
                      setEditOpen(true)
                    }}>
                      <BsPencil className="hover:text-green-600" />
                      <PositionEdit setEditOpen={setEditOpen} editOpen={editOpen} position={position} />
                    </button>

                    <button onClick={e => {
                      setOpen(true)
                    }}>
                      <BsTrash className="hover:text-red-600" />
                      <DestroyPosition setOpen={setOpen} open={open} position={position} />
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


