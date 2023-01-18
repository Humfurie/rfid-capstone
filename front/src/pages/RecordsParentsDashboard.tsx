import Header from "../components/Header";
import Head from "next/head";
import AdminNavbar from "../components/AdminComponents/AdminNavbar";
import RecordsParentsContent from "../components/UsersComponents/RecordsParentsContent";

const RecordsParentsDashboard = () => {
    return (
        <div>
            <Head>
                <title>Records-Parents</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>
            <div>
                <Header />
            </div>
            <div className="inline-flex">
                <AdminNavbar />
                <RecordsParentsContent />
            </div>
        </div>
    );
}

export default RecordsParentsDashboard;