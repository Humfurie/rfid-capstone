import Head from "next/head";
import AdminNavbar from "../../../components/AdminComponents/AdminNavbar";
import Header from "../../../components/Header";
import ParentRegistration from "../../../components/UsersComponents/Registration/ParentRegistration";

const parent = () => {
    return (
        <div className="flex h-screen">
            <Head>
                <title>List of Parents</title>
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
                                <ParentRegistration />
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default parent;