import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Header from "../../components/Header";
import UsersEmployeesContent from "../../components/UsersComponents/UsersEmployeesContent";

export default function UsersEmployeesDashboard(props: any) {
	const { users } = props
	// console.log(users)
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
					<UsersEmployeesContent users={users} />
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

