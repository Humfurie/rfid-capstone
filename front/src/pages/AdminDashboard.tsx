import Head from "next/head";
import AdminContent from "../components/AdminComponents/AdminDashboardContent";
import AdminNavbar from "../components/AdminComponents/AdminNavbar";
import Header from "../components/Header";

export default function AdminDashboard() {


	return (
		<div>
			<Head>
				<title>Admin's Dashboard</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div>
				<Header />
				<div className="inline-flex">
					<AdminNavbar />
					<AdminContent />
				</div>

			</div>
		</div>
	);
}