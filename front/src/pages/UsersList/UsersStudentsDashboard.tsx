import Head from "next/head";
import Header from "../../components/Header";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import UsersStudentsContent from "../../components/UsersComponents/UsersStudentsContent";
import { GetServerSideProps } from "next";
import axios from "axios";


export default function UsersStudentsDashboard(props: any) {
	const { users } = props
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
					<UsersStudentsContent users={users} />
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