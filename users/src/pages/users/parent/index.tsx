import Head from "next/head";
import ParentHeader from "../../../components/ParentComponents/ParentHeader";
import { Style } from "../../../lib/Style";
import { SetStateAction, useContext, useMemo, useState } from "react";
import Pagination from "@mui/material/Pagination";
import moment from 'moment'
import { FormContext } from "../../../lib/FormContext";

const ParentDashboard = () => {
    const { data, error } = useContext(FormContext)

    const itemsPerPage = 15
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil((data?.data.activity || []).length / itemsPerPage)
    const handleChangePage = (_event: any, newPage: SetStateAction<number>) => {
        setCurrentPage(newPage)
    }

    if (error) return <> ...error </>

    let activityMap
    console.log(data?.data)
    useMemo(() => {
        if (data?.data) {
            activityMap = (
                <>
                    {(data?.data.user || []).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((activity: any) => {
                        const date = activity.created_at
                        // console.log(date)
                        return (
                            <tbody key={activity.id}>
                                <tr className={`border-collapse  hover:bg-gray-200`}>
                                    <td className={`${Style.tableBorder}`}>
                                        {moment(date).format('MMMM Do YYYY, h:mm:ss a')}
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
        <div className="flex w-full h-screen">
            <Head>
                <title>Parent</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>

            <div className="flex flex-col w-full">
                <ParentHeader />
                <div className="flex flex-col h-full bg-gray-200   ">
                    <div className="flex flex-col justify items-center pt-10 pr-20 pl-20 ">
                        <div>
                            Your recent activities
                        </div>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handleChangePage}
                            variant="text"
                        />
                        <div className={`w-full`}>
                            <table className={`table-fixed w-full`}>
                                <thead className={`bg-gray-500 text-white`}>
                                    <tr className="border-collapse ">
                                        <th className={`${Style.tableBorder}`}>Date</th>
                                        <th className={`${Style.tableBorder}`}>Day</th>
                                        <th className={`${Style.tableBorder}`}>Status</th>
                                    </tr>
                                </thead>
                                {activityMap}
                            </table>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default ParentDashboard;