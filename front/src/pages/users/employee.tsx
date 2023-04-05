import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import UsersDataTable from "../../components/UsersComponents/DataTable/UsersDataTable";
import Header from "../../components/Header";
import EmployeeTab from "../../components/Tabs/EmployeeTab";
import { Style } from "../../lib/Style";


export default function employee(props: any) {
	const { user } = props
	return (
		<div className="flex h-screen">
			<Head>
				<title>List of Employees</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div className="flex flex-col max-h-full">
				<Header />
				<div className="flex h-full bg-gray-200">
					<div className="h-full">
						<AdminNavbar />
					</div>
					<div className="flex flex-col w-full">
						<div>
							<EmployeeTab />

						</div>
						<div className={`w-full p-2`}>
							<UsersDataTable user={user} />
						</div>
					</div>

				</div>
			</div>

		</div>

	);
}

export const getStaticProps: GetStaticProps = async () => {
	const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/employeeIndex`)

	return {
		props: {
			user: data.data
		},
		revalidate: 5
	}
}

