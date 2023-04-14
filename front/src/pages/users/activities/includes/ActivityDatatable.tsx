import { useRouter } from "next/router";
import React from "react";
import { useMemo } from "react";
import { Style } from "../../../../lib/Style";
import moment from 'moment'

const ActivityDatatable = (props: any) => {
    const { data, currentPage, itemsPerPage, error, isLoading } = props
    const router = useRouter()

    let activityMap

    if (error) return <> ...error </>
    if (isLoading) return <> ...loading </>

    useMemo(() => {
        if (data) {
            activityMap = (
                <>
                    {(data || []).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((activity: any) => {
                        const user = activity.user
                        const date = activity.created_at
                        return (
                            <tbody key={activity.id}>
                                <tr className={`border-collapse  hover:bg-gray-200`}>
                                    <td className={`${Style.tableBorder}`}>
                                        {moment(date).format('MM/DD/YYYY')}
                                        {/* {date} */}
                                    </td>
                                    <td className={`${Style.tableBorder}`}>
                                        {user?.first_name ?? ""} {user?.last_name ?? ""}
                                    </td>
                                    <td className={`${Style.tableBorder}`}>

                                        {activity.day}
                                    </td>
                                    <td className={`${Style.tableBorder}`}>
                                        {activity.status}
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </>
            )
        }
    }, [data])

    return (
        <div className={`w-full`}>
            <table className={`table-fixed w-full`}>
                <thead className={`bg-gray-500 text-white`}>
                    <tr className="border-collapse ">
                    <th className={`${Style.tableBorder}`}>Date</th>
                        <th className={`${Style.tableBorder}`}>Name</th>
                        <th className={`${Style.tableBorder}`}>Day</th>
                        <th className={`${Style.tableBorder}`}>Status</th>
                    </tr>
                </thead>
                {activityMap}
            </table>
        </div>
    );
}

export default ActivityDatatable;