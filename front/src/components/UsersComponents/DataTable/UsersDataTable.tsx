import * as React from "react";
import Link from "next/link";

export default function UsersDataTable(props: any) {
  const { users } = props
  const [isLoading, setLoading] = React.useState(true)

  console.log(users)

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
            const roles = user.role[0].role
            const role = roles.toString().toLowerCase()
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
              <td className="border border-slate-300 p-3">
                  <div className="space-x-1">
                      <Link href={`/users/${role}/${user.id}`}>
                          {/* {console.log(user.id)} */}
                          {/* <a className="px-3 py-2 bg-green-600 text-white rounded-xl">
                    
                  </a> */}
                          View
                      </Link>
                      <Link href={`/users/${role}/${user.id}/edit`}>
                          {/* <a className="px-3 py-2 bg-yellow-600 text-white rounded-xl">
                    
                  </a> */}
                          Update
                      </Link>
                      <Link href={`/users/${role}/${user.id}/delete`}>
                          {/* <a className="px-3 py-2 bg-red-600 text-white rounded-xl">
                    
                  </a> */}
                          Delete
                      </Link>
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

