import Head from "next/head";
import AdminNavbar from "../../../components/AdminComponents/AdminNavbar";
import Header from "../../../components/Header";
import StudentRegistration from "../../../components/UsersComponents/Registration/StudentRegistration";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { Style } from "../../../lib/Style";
import Sidebar from "../../../components/Sidebar";
import Button from "@mui/material/Button";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const student = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={`flex-col ${Style.parentDiv}`}>

            <Head>
                <title>Student Registration</title>
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
                    <div className={`pt-3`}>
                        <div className={`${Style.menuTab}`}>

                            <Button
                                startIcon={<ArrowBackRoundedIcon />}
                                className={`${Style.textColor}`}
                                href="/users/student"
                            >
                                Back
                            </Button>

                        </div>
                    </div>


                    <div className={`${Style.tableBg}`}>
                        <StudentRegistration />
                    </div>


                </div>
            </div>
        </div>
    );
}

export default student;