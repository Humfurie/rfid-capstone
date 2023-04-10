import Head from "next/head";
import AdminNavbar from "../../../components/AdminComponents/AdminNavbar";
import Header from "../../../components/Navigation";
import StudentRegistration from "../../../components/UsersComponents/Registration/StudentRegistration";

const student = () => {
    return (
        <div className=" flex h-screen">
            <Head>
                <title>Student Registration</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>
            <div className="flex flex-col max-h-full">
                <Header />
                <div className="flex h-full bg-gray-200 w-screen">
                    <div className="h-full">
                        <AdminNavbar />
                    </div>
                    <div className="flex flex-col w-full">

                        <div className={`w-full p-2`}>
                            <StudentRegistration />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default student;