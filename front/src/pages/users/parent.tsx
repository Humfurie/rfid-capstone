import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head"
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import Header from "../../components/Header";
import ParentTab from "../../components/Tabs/ParentTab";
import ParentDatatable from "../../components/UsersComponents/DataTable/ParentDataTable";


export default function parent(props: any) {
	const { users } = props
	console.log(users)
	return (
		<div className="flex h-screen">
			<Head>
				<title>List of Parents</title>
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
						<div className="flex flex-col w-full">
							<div>
								<ParentTab/>
							</div>
							<div className={`w-full p-2`}>
								<ParentDatatable users={users} />
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/parent/index`)

	return {
		props: {
			users: data.data
		}
	}
}