import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { SetStateAction, useState } from 'react';
import Header from "../../components/Header";
import YearLevelTab from "../../components/Tabs/YearLevelTab";
import YearLevelDataTable from "../../components/UsersComponents/DataTable/YearLevelDataTable";
import { Style } from "../../lib/Style";
import Sidebar from "../../components/Sidebar";
import { useTheme } from "@mui/material/styles";


const YearLevel = (props: any) => {
    const { yearLevels } = props

    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const itemsPerPage = 10
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(yearLevels.length / itemsPerPage)
    const handleChangePage = (_event: any, newPage: SetStateAction<number>) => {
        setCurrentPage(newPage)
    }

    return (
        <div className={`flex-col ${Style.parentDiv}`}>

            <Head>
                <title>Year Level</title>
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

                <div className={`flex flex-col w-full pt-12`}>

                    <div>
                        <YearLevelTab totalPages={totalPages} handleChangePage={handleChangePage} currentPage={currentPage} />
                    </div>
                    <div className={`${Style.tableBg}`}>
                        <YearLevelDataTable yearLevels={yearLevels} totalPages={totalPages} itemsPerPage={itemsPerPage} handleChangePage={handleChangePage} currentPage={currentPage} />
                    </div>

                </div>
            </div>

        </div>
    );
}
export default YearLevel;

export const getServerSideProps: GetServerSideProps = async () => {

    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/year_level`)

    return {
        props: {
            yearLevels: data.data
        }
    }
}