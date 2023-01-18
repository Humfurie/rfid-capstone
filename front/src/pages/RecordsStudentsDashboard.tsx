import Head from "next/head";
import AdminNavbar from "../components/AdminComponents/AdminNavbar";
import Header from "../components/Header";
import RecordsStudentsContent from "../components/UsersComponents/RecordsStudentsContent";

const RecordsStudentsDashboard = () => {
    return (
        <div>
            <Head>
                <title>Records-Students</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>
            <div>
                <Header />
            </div>
            <div className="inline-flex">
                <AdminNavbar />
                <RecordsStudentsContent />
            </div>
        </div>
    );
}

export default RecordsStudentsDashboard;