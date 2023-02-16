import Head from "next/head";
import Header from "../../components/Header";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import UsersStudentsContent from "../../components/UsersComponents/UsersStudentsContent";


export default function UsersStudentsDashboard() {
	return (
		<div >
			<Head>
				<title>List of Students</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div>
				<Header />
				<div className="inline-flex">
					<AdminNavbar />
					<UsersStudentsContent />
				</div>

			</div>
		</div>
	);
}