import Link from "next/link";
import { useState } from "react";
import { BsPencil, BsEye, BsTrash } from "react-icons/bs";
import { Style } from "../../../lib/Style";
import DestroyParent from "../../../pages/users/parent/[id]/destroyParent";


const ParentDatatable = (props: any) => {
  const { users } = props
  return (
    <div className="w-full">
      <table className="table-fixed bg-white-smoke w-full rounded-lg">
        <thead className={`${Style.toLeft}`}>
          <tr className="border-collapse ">
            <th className={`${Style.tableBorder}`}>ID</th>
            <th className={`${Style.tableBorder}`}>Name</th>
            <th className={`${Style.tableBorder}`}>Contact Number</th>
            <th className={`${Style.tableBorder}`}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, id: number) => {

            const [open, setOpen] = useState(false)

            return (
              <tr key={id} className="border-collapse even:bg-white odd:bg-white-smoke hover:bg-gray-200">
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
                    <Link href={`/users/parent/${user.id}`}>
                      <BsEye className="hover:text-blue-600" />
                    </Link>
                    <Link href={`/users/parent/${user.id}/edit`}>
                      <BsPencil className="hover:text-green-600" />
                    </Link>
                    <button onClick={e => {
                      setOpen(true)
                    }}>
                      <BsTrash className="hover:text-red-600" />
                      <DestroyParent setOpen={setOpen} open={open} user={user} />
                    </button>

                    {/* <Link href={`/users/parent/${user.id}/delete`}>
                      <BsTrash className="hover:text-red-600" />
                    </Link> */}
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

export default ParentDatatable;