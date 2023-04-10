import Head from "next/head";
import AdminNavbar from "../../../components/AdminComponents/AdminNavbar";
import Header from "../../../components/Navigation";
import EmployeeRegistration from "../../../components/UsersComponents/Registration/EmployeeRegistration";

const employee = () => {
    return (
        <div className="flex h-screen">
            <Head>
                <title>Employee Registration</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>
            <div className="flex flex-col h-full w-full">
                <Header />
                <div className="flex h-full bg-gray-200 w-screen">
                    <div className="flex h-full">
                        <AdminNavbar />
                    </div>
                    <div className="flex w-full p-2">
                        <EmployeeRegistration />
                    </div>
                </div>
            </div>


        </div>
    );
}

export default employee;