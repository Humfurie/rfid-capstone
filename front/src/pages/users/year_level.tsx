import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext } from "react";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Header from "../../components/Header";
import YearLevelTab from "../../components/Tabs/YearLevelTab";
import YearLevelDataTable from "../../components/UsersComponents/DataTable/YearLevelDataTable";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";

const year_level = (props: any) => {
    const { yearLevel } = props
    const {
        setYear,
        yearSubmit
    } = useContext(FormContext)

    return (
        <div className="flex h-screen w-screen bg-white">
            <div>
                <Head>
                    <title>Year Level</title>
                    <meta name="description" content="Created by streamline" />
                    <link rel="icon" href=".../img/ais-rft-logo.jpg" />
                </Head>
            </div>
            <div className="flex flex-col h-full w-full">
                <Header />
                <div className="flex h-full w-full">
                    <div className="h-full">
                        <AdminNavbar />
                    </div>
                    <div className="flex flex-col w-full">
                        <div>
                            <YearLevelTab />
                        </div>
                        <div className={`w-full p-2`}>
                            <YearLevelDataTable yearLevel={yearLevel} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default year_level;

export const getServerSideProps: GetServerSideProps = async () => {

    const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/year_level`)

    return {
        props: {
            yearLevel: data.data
        }
    }
}