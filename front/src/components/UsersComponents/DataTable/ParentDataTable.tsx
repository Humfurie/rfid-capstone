import Link from "next/link";
import { BsPencil, BsEye, BsTrash } from "react-icons/bs";

const ParentDatatable = (props: any) => {
  const { users } = props
  return (
    <div className="flex w-full">
      <table className="border-collapse border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300">ID</th>
            <th className="border border-slate-300">Name</th>
            <th className="border border-slate-300">Contact Number</th>
            <th className="border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, id: number) => {

            return (
              <tr key={id}>
                <td className="border border-slate-300 p-3">
                  {user.id}
                </td>
                <td className="border border-slate-300 p-3">
                  {user.first_name} {user.last_name}
                </td>
                <td className="border border-slate-300 p-3">
                  {user.contact_number}
                </td>
                <td className="border border-slate-300 p-4 flex gap-3">
                    <Link href={`/users/parent/${user.id}`}>
                      <BsEye className="hover:text-blue-600" />
                    </Link>
                    <Link href={`/users/parent/${user.id}/edit`}>
                      <BsPencil className="hover:text-green-600" />
                    </Link>
                    <Link href={`/users/parent/${user.id}/delete`}>
                      <BsTrash className="hover:text-red-600" />
                    </Link>
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