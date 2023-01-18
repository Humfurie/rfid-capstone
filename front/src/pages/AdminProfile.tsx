import Head from "next/head";
import AdminNavbar from "../components/AdminComponents/AdminNavbar";
import AdminProfileContent from "../components/AdminComponents/AdminProfileContent";
import Header from "../components/Header";


const AdminNavbarProfile = () => {
    return (
        <div >
			<Head>
				<title>Admin's Profile</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div>
				<Header />
				<div className="inline-flex">
					<AdminNavbar />
					<AdminProfileContent/>
				</div>

			</div>
		</div>
    );
}

export default AdminNavbarProfile;