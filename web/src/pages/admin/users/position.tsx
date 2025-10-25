import axios from "axios";
import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../../components/Header";
import PositionTab from "../../components/Tabs/PositionTab";
import PositionDataTable from "../../components/UsersComponents/DataTable/PositionDataTable";
import { Style } from "../../lib/Style";
import Sidebar from "../../components/Sidebar";
import { SetStateAction, useState } from 'react';
import { useTheme } from "@mui/material/styles";


const position = (props: any) => {

    const { positions } = props

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
    const totalPages = Math.ceil(positions.length / itemsPerPage)
    const handleChangePage = (_event: any, newPage: SetStateAction<number>) => {
        setCurrentPage(newPage)
    }

    return (
        <div className={`flex-col ${Style.parentDiv}`}>

            <Head>
                <title>List of Positions</title>
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
                        <PositionTab totalPages={totalPages} handleChangePage={handleChangePage} currentPage={currentPage} />

                    </div>
                    <div className={`${Style.tableBg}`}>
                        <PositionDataTable positions={positions} totalPages={totalPages} itemsPerPage={itemsPerPage} handleChangePage={handleChangePage} currentPage={currentPage} />
                    </div>
                </div>

            </div>
        </div>


    );
}
export default position;


export const getStaticProps: GetStaticProps = async () => {
    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/position`)
    return {
        props: {
            positions: data.data

        },
        revalidate: 5
    }
}
