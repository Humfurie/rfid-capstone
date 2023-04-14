import axios from "axios"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { SetStateAction, useEffect, useMemo, useState } from "react"
import useSWR from 'swr'
import ActivityDatatable from "./includes/ActivityDatatable"
import React from "react"
import Head from "next/head"
import { Style } from "../../../lib/Style"
import { useTheme } from "@mui/material/styles"
import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar"
import Pagination from "@mui/material/Pagination";

const index = () => {

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    const fetcher = (url: any) => axios.get(url)
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/rfid/show`, fetcher, { refreshInterval: 1000 })

    const itemsPerPage = 15
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil((data?.data[4] || []).length / itemsPerPage)
    const handleChangePage = (_event: any, newPage: SetStateAction<number>) => {
        setCurrentPage(newPage)
    }

    if (error) return <> ...error </>
    if (isLoading) return <> ...loading </>
    return (
        <div className={`flex h-full`}>
            <Head>
                <title>Activities</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>

            <div className={`${Style.mainContent}`}>

                <div>
                    <Header open={open} handleDrawerOpen={handleDrawerOpen} />
                </div>
                <div>
                    <Sidebar open={open} theme={theme} handleDrawerClose={handleDrawerClose} />
                </div>

                <div className={`flex flex-col w-full pt-14`}>
                    <div className={`${Style.tableBg}`}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handleChangePage}
                            variant="text"
                        />
                        <ActivityDatatable data={data?.data[4] || []} totalPages={totalPages} itemsPerPage={itemsPerPage} handleChangePage={handleChangePage} currentPage={currentPage} isLoading={isLoading} error={error} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default index