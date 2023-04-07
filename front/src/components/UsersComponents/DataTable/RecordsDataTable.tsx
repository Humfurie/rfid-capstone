import Link from "next/link";

const RecordsDataTable = (props: any) => {
    const { records } = props
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
                    {records.map((record: any, id: number) => {

                        return (
                            <tr key={id}>
                                <td className="border border-slate-300 p-3">
                                    {record.id}
                                </td>
                                <td className="border border-slate-300 p-3">
                                    {record.position}
                                </td>
                                <td className="border border-slate-300 p-3">
                                    <div className="space-x-1">
                                        <Link href={`/users/records/${record.id}`}>
                                            {/* {console.log(user.id)} */}
                                            {/* <a className="px-3 py-2 bg-green-600 text-white rounded-xl">
                    
                  </a> */}
                                            View
                                        </Link>
                                        <Link href={`/users/records/${record.id}/edit`}>
                                            {/* <a className="px-3 py-2 bg-yellow-600 text-white rounded-xl">
                    
                  </a> */}
                                            Update
                                        </Link>
                                        <Link href={`/users/records/${record.id}/delete`}>
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

export default RecordsDataTable;