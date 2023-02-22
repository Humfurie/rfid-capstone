import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head"
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Header from "../../components/Header";
import UsersParentsContent from "../../components/UsersComponents/UsersParentsContent";


export default function UsersParentsDashboard(props: any) {
	const { users } = props
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
					<UsersParentsContent users={users} />
				</div>

			</div>
		</div>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/parentIndex`)

	return {
		props: {
			users: data.data.user
		}
	}
}