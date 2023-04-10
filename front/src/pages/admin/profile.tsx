import Head from "next/head";
import { useState } from "react";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import AdminProfileContent from "../../components/AdminComponents/AdminProfileContent";
import Header from "../../components/Header";


const profile = () => {
	const [form, setForm] = useState()
	return (
		<div className="flex h-screen">
			<Head>
				<title>Profile</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div className="flex flex-col max-h-full w-full">
				<Header />
				<div className="flex h-full bg-gray-200">
					<div className="h-full">
						<AdminNavbar />
					</div>
					<div className="flex flex-col w-full">
						<div className="w-full p-2">
							<AdminProfileContent />
						</div>

					</div>

				</div>

			</div>
		</div>
	);
}

export default profile;