import axios from "axios"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"
import { useEffect, useMemo, useState } from "react"
import useSWR from 'swr'
import ActivityDatatable from "./includes/ActivityDatatable"
import React from "react"
import Head from "next/head"
import { Style } from "../../../lib/Style"
import { useTheme } from "@mui/material/styles"
import Header from "../../../components/Header"
import Sidebar from "../../../components/Sidebar"

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

    console.log("act hehe", data?.data)

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
                        <ActivityDatatable data={data?.data[4] || []} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default index