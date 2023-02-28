import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useContext } from "react";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import YearLevelDataTable from "../../components/UsersComponents/DataTable/YearLevelDataTable";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";

const year_level = (props: any) => {
    const { yearLevel } = props
    const {
        setYear,
        yearSubmit
 } = useContext(FormContext)
console.log(yearLevel)
    return (
        <div>
             
            <div>
                <Head>
                    <title>Year Level</title>
                    <meta name="description" content="Created by streamline" />
                    <link rel="icon" href=".../img/ais-rft-logo.jpg" />
                </Head>
            </div>
            <div className="inline-flex">
                <AdminNavbar/>
                <div className="flex flex-col w-screen">
            <div className="flex flex-row top-status-content ml-6 mt-6 w-full">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        yearSubmit()
                    }}
                >
                    <input
                        type="text"
                        onChange={(e) => {
                            setYear(e.target.value)
                        }}
                    />
                    <MyButton
                        type="submit"
                        label="Add Year Level" 
                        className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20% font-medium rounded-r-lg text-sm px-4 py-2 "
                        />

                </form>
            </div>
            <div className="flex flex-row top-status-content ml-6 mt-6 w-full">
                list of year levels
                <YearLevelDataTable yearLevel={yearLevel} />
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