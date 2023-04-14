import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Head from "next/head";
import UsersDataTable from "../../components/UsersComponents/DataTable/UsersDataTable";
import Header from "../../components/Header";
import EmployeeTab from "../../components/Tabs/EmployeeTab";
import { useTheme } from '@mui/material/styles';
import { SetStateAction, useEffect, useMemo, useState } from 'react';
import { Style } from "../../lib/Style";
import { GetServerSideProps } from "next";


export default function employee(props: any) {
	const { users } = props

	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const handleDrawerOpen = () => {
		setOpen(true)
	}
	const handleDrawerClose = () => {
		setOpen(false)
	}

	const itemsPerPage = 10
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = Math.ceil(users.length / itemsPerPage)
	const handleChangePage = (_event: any, newPage: SetStateAction<number>) => {
		setCurrentPage(newPage)
	}

	const [searchUser, setSearchUser] = useState('')
	const [searchResult, setSearchResult] = useState(users)

	console.log(searchResult, users)
	const handleSearch = (event: { target: { value: any } }) => {
		const { value } = event.target
		setSearchUser(value)

		const filteredResults = value ? users.filter((user: { first_name: string; last_name: string; contact_number: string; }) => {
			return (
				user.first_name.toLowerCase().includes(value.toLowerCase()) ||
				user.last_name.toLowerCase().includes(value.toLowerCase()) ||
				user.contact_number.toLowerCase().includes(value.toLowerCase()))
		}) : users
		setSearchResult(filteredResults)
	}

	return (
		<div className={`flex h-full`}>
			<Head>
				<title>List of Employees</title>
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
						<EmployeeTab totalPages={totalPages} handleChangePage={handleChangePage} currentPage={currentPage} handleSearch={handleSearch} searchUser={searchUser} users={users} />
					</div>
					<div className={`${Style.tableBg}`}>
						<UsersDataTable users={searchResult || users} totalPages={totalPages} itemsPerPage={itemsPerPage} handleChangePage={handleChangePage} currentPage={currentPage} />
					</div>
				</div>
			</div>
		</div>

	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users/employeeIndex`)

	return {
		props: {
			users: data.data
		},
	}
}

