import Head from "next/head";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Header from "../../components/Header";
import UsersEmployeesContent from "../../components/UsersComponents/UsersEmployeesContent";

export default function UsersEmployeesDashboard  () {
    return (
        <div >
			<Head>
				<title>List of Employees</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div>
				<Header />
				<div className="flex w-screen">
					<AdminNavbar />
					<UsersEmployeesContent />
				</div>

			</div>
		</div>
    );
}

 UsersEmployeesDashboard;