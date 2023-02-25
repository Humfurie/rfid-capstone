import Link from "next/link";

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
              <td className="border border-slate-300 p-3">
                  <div className="space-x-1">
                      <Link href={`/users/parent/${user.id}`}>
                          View
                      </Link>
                      <Link href={`/users/parent/${user.id}/edit`}>

                          Update
                      </Link>
                      <Link href={`/users/parent/${user.id}/delete`}>
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

export default ParentDatatable;