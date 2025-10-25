import axios from "axios";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import AdminNavbar from "../../../../components/AdminComponents/AdminNavbar";
import Header from "../../../../components/Header";
import UserView from "../../../../components/UsersComponents/Show/UserView";
import Head from "next/head";
import { Style } from "../../../../lib/Style";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Sidebar from "../../../../components/Sidebar";
import EmployeeViewTab from "../../../../components/Tabs/EmployeeViewTab";

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
                        <EmployeeViewTab user = {user}/>
                    </div>

                    <div className={`${Style.tableBg}`}>
                        <UserView user={user} />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default index;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { params } = context

    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/employee/${params?.id}`)

    return {
        props: {
            user: data.data
        }
    }
}