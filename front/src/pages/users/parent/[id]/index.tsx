import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import AdminNavbar from "../../../../components/AdminComponents/AdminNavbar";
import Header from "../../../../components/Header";
import ParentView from "../../../../components/UsersComponents/Show/ParentView";
import { Style } from "../../../../lib/Style";
import Head from "next/head";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Sidebar from "../../../../components/Sidebar";
import ParentViewTab from "../../../../components/Tabs/ParentViewTab";

const index = (props: any) => {
    const { user } = props

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={`${Style.parentDiv}`}>

            <Head>
                <title>View Employee</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>

            <div className={`w-full ${Style.mainContent}`}>

                <div>
                    <Header open={open} handleDrawerOpen={handleDrawerOpen} />
                </div>
                <div>
                    <Sidebar open={open} theme={theme} handleDrawerClose={handleDrawerClose} />
                </div>

                <div className={`flex flex-col w-full pt-12`}>
                    <div>
                        <ParentViewTab user ={user} />
                    </div>
                    <div className={`${Style.tableBg}`}>
                        <ParentView user={user} />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { params } = context

    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/parent/${params?.id}`)

    return {
        props: {
            user: data.data
        }
    }
}