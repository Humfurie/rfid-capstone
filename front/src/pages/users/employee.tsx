import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import UsersDataTable from "../../components/UsersComponents/DataTable/UsersDataTable";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import EmployeeTab from "../../components/Tabs/EmployeeTab";
import { Style } from "../../lib/Style";


export default function employee(props: any) {
	const { users } = props
	console.log(users)
	return (
		<div className="flex h-screen">
			<Head>
				<title>List of Employees</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div className="flex flex-col max-h-full">
				<Header />
				<div className="flex h-full bg-white">
					<div className="h-full">
						<AdminNavbar />
					</div>
					<div className="flex flex-col w-full">

						<div>
							<EmployeeTab />

						</div>
						<div className={`w-full p-2`}>
							<UsersDataTable users={users} />
						</div>
					</div>

				</div>
			</div>

		</div>

	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/employeeIndex`)

	return {
		props: {
			users: data.data.user
		}
	}
}

