import Head from "next/head";
import AdminNavbar from "../../../components/AdminComponents/AdminNavbar";
import YearLevelDashboardContent from "../../../components/UsersComponents/YearLevels/YearLevelDashboardContent";

const index = () => {
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
                <YearLevelDashboardContent/>
            </div>

        </div>
    );
}

export default index;