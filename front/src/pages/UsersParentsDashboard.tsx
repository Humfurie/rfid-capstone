import Head from "next/head";
import AdminNavbar from "../components/AdminComponents/AdminNavbar";
import Header from "../components/Header";
import UsersParentsContent from "../components/UsersComponents/UsersParentsContent";


export default function UsersParentsDashboard() {
    return (
        <div >
			<Head>
				<title>List of Parents</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div>
				<Header />
				<div className="inline-flex">
					<AdminNavbar />
					<UsersParentsContent />
				</div>

			</div>
		</div>
    );
}

