import Head from "next/head";
import { useState } from "react";
import AdminNavbar from "../../components/AdminComponents/AdminNavbar";
import AdminProfileContent from "../../components/AdminComponents/AdminProfileContent";
import Header from "../../components/Header";
import { Style } from "../../lib/Style";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../../components/Sidebar";


const profile = () => {
	const [form, setForm] = useState()

	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<div className={`flex-col ${Style.parentDiv}`}>

			<Head>
				<title>Profile</title>
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

				<div className={`flex flex-col w-full pt-14`}>
					
						<div className={`${Style.tableBg}`}>
							<AdminProfileContent />
						</div>
				</div>

			</div>
		</div>
	);
}

export default profile;