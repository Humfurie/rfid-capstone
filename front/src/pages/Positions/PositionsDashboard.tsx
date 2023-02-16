import Head from "next/head";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import PositionDashboardContent from "../../components/PositionsComponents/PositionDashboardContent";


const PositionsDashboard = () => {
    return (
        <div>
            <div>
                <Head>
                    <title>Positions</title>
                    <meta name="description" content="Created by streamline" />
                    <link rel="icon" href=".../img/ais-rft-logo.jpg" />
                </Head>
            </div>
            <div className="inline-flex">
                <AdminNavbar/>
                <PositionDashboardContent/>
            </div>
        </div>
    );
}

export default PositionsDashboard;