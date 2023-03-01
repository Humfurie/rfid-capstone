import Head from "next/head";
import Link from "next/link";
import { GetServerSideProps } from "next";
import axios from "axios";
import Header from "../../components/Header";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import UsersDataTable from "../../components/UsersComponents/DataTable/UsersDataTable";
import StudentYearLevelFilter from "../../components/UsersComponents/Records/StudentYearLevelFilter";
import SearchBar from "../../components/SearchBar";


export default function student(props: any) {
	const { users } = props
	return (
		<div>
			<Head>
				<title>List of Employees</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div>
				<Header />
				<div className="inline-flex">
					<div>
						<AdminNavbar />
					</div>
					<div className="flex flex-col w-full">
						<div className="flex flex-row top-status-content ml-6 mt-6 w-full">
							<div>
								<Link
									href={"/users/registration/student"}
									className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20%  font-medium rounded-lg text-sm px-4 py-2 ">
									Add Student
								</Link>
							</div>
							<div>
								<SearchBar />
							</div>
							<div className=" inset-y-0 left-full">
								<StudentYearLevelFilter />
							</div>
						</div>
						<div className="flex w-full ">
							<UsersDataTable users={users} />
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
			users: data.data.user
		}
	}
}