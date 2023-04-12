import { useRouter } from "next/router";
import React from "react";
import { useMemo } from "react";

const ActivityDatatable = (props: any) => {
    const { data } = props
    const router = useRouter()

    let activityMap

    useMemo(() => {
        if (data) {
            activityMap = (
                <div>
                    {(data || []).map((activity: any) => {
                        const user = activity.user
                        return (
                            <>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Day</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {user.first_name} {user.last_name}
                                            </td>
                                            <td>

                                                {activity.day}
                                            </td>
                                            <td>
                                                {activity.status}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        )
                    })}
                </div>
            )
        }
    }, [data])

    return (
        <>
            {activityMap}
        </>
    );
}

export default ActivityDatatable;