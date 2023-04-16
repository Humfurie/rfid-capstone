import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Head from "next/head"
import Header from "../../components/Header";
import ParentTab from "../../components/Tabs/ParentTab";
import ParentDatatable from "../../components/UsersComponents/DataTable/ParentDataTable";
import { Style } from "../../lib/Style";
import { useTheme } from '@mui/material/styles';
import { SetStateAction, useState } from 'react';
import { GetServerSideProps } from "next";



export default function parent(props: any) {
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
	
	const [searchUser, setSearchUser] = useState('')
	const [searchResult, setSearchResult] = useState(users)

	const handleSearch = (event: { target: { value: any } }) => {
		const { value } = event.target
		setSearchUser(value)

		const filteredResults = value ? users.filter((user: { first_name: string; last_name: string; contact_number: string; }) => {
			return (
				user.first_name.toLowerCase().includes(value.toLowerCase()) ||
				user.last_name.toLowerCase().includes(value.toLowerCase()) ||
				user.contact_number.toLowerCase().includes(value.toLowerCase()))
		}) : users


		console.log(filteredResults)
		setSearchResult(filteredResults)
	}

	return (
		<div className={`flex h-screen`}>
			<Head>
				<title>List of Parents</title>
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
						<ParentTab totalPages={totalPages} handleChangePage={handleChangePage} currentPage={currentPage} searchUser={searchUser} handleSearch={handleSearch} users={users} />
					</div>
					<div className={`${Style.tableBg}`}>
						<ParentDatatable users={searchResult} totalPages={totalPages} itemsPerPage={itemsPerPage} handleChangePage={handleChangePage} currentPage={currentPage} />
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