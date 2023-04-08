import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";
import axios from "axios";
import Header from "../../components/Header";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import UsersDataTable from "../../components/UsersComponents/DataTable/UsersDataTable";
import StudentYearLevelFilter from "../../components/UsersComponents/Records/StudentYearLevelFilter";
import SearchBar from "../../components/SearchBar";
import StudentTab from "../../components/Tabs/StudentTab";


export default function student(props: any) {
	const { user } = props
	console.log(user)
	return (
		<div className="flex h-screen">
			<Head>
				<title>List of Students</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div className="flex flex-col h-full">
				<Header />
				<div className="flex h-full bg-white">
					<div className="h-full">
						<AdminNavbar />
					</div>
					<div className="flex flex-col w-full">
						<div>
							<StudentTab />

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

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/studentIndex`)

	return {
		props: {
			user: data.data
		}
	}
}