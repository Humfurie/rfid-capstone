import Head from "next/head";
import axios from "axios";
import StudentTab from "../../components/Tabs/StudentTab";
import Header from "../../components/Header";
import UsersDataTable from "../../components/UsersComponents/DataTable/UsersDataTable";
import Sidebar from "../../components/Sidebar";
import { useTheme } from '@mui/material/styles';
import { SetStateAction, useState } from 'react';
import { GetServerSideProps } from "next";
import { Style } from "../../lib/Style";


export default function student(props: any) {

	const { users } = props

	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	const itemsPerPage = 10
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = Math.ceil(users.length / itemsPerPage)
	const handleChangePage = (_event: any, newPage: SetStateAction<number>) => {
		setCurrentPage(newPage)
	}

	return (
		<div className="flex h-screen">
			<Head>
				<title>List of Students</title>
				<meta name="description" content="Created by streamline" />
				<link rel="icon" href=".../img/ais-rft-logo.jpg" />
			</Head>
			<div className={`${Style.mainContent}`}>
				<div>
					<Header open={open} handleDrawerOpen={handleDrawerOpen} />
				</div>
				<div>
					<Sidebar open={open} theme={theme} handleDrawerClose={handleDrawerClose} />
				</div>
				<div className={`flex flex-col w-full pt-12`}>
					<div>
						<StudentTab totalPages={totalPages} handleChangePage={handleChangePage} currentPage={currentPage}/>
					</div>
					<div className={`${Style.tableBg}`}>
						<UsersDataTable users={users} totalPages={totalPages} itemsPerPage={itemsPerPage} handleChangePage={handleChangePage} currentPage={currentPage}/>
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
			users: data.data
		}
	}
}