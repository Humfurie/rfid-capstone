import Head from "next/head";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Header from "../../components/Header";
import RecordsEmployeesContent from "../../components/RecordsComponents/RecordsEmployeesContent";

const RecordsEmployeesDashboard = () => {
    return (
        <div>
             <Head>
                <title>Records-Employees</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href=".../img/ais-rft-logo.jpg" />
            </Head>
            <div>
                <Header/>
            </div>
            <div className="inline-flex">
        <AdminNavbar/>
        <RecordsEmployeesContent/>

            </div>
        </div>
    );
}

export default RecordsEmployeesDashboard;