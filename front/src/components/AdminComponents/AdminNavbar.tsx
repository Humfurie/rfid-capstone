import React, { useContext } from "react";
import { MdDashboard } from "react-icons/md"
import { FaUserAlt, FaUsers, FaThList, FaSignOutAlt } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io"
import Link from "next/link";
import { FormContext } from "../../lib/FormContext";
import { destroyCookie } from "nookies";
import { useRouter } from "next/router";



export default function AdminNavbar() {

	const router = useRouter()

	const {
		open,
		setOpen,
		submenuOpen,
		setSubmenuOpen,
		currentMenu,
		setCurrentMenu
	} = useContext(FormContext)


	// console.log("naopen", open)
	const Menus = [{
		title: <Link href="/">Dashboard</Link>,
		icon: ""
	},

	{
		title: <Link href="/admin/profile" type="button">Profile</Link>,
		icon: <FaUserAlt />
	},
	{
		title: "Users",
		icon: <FaUsers />,
		submenuItems: [
			{
				src: <Link href="/users/employee" className="text-white-smoke text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-gray-700 hover:bg-magic-mint hover:rounded-lg"
				>Employees</Link>
			},
			{
				src: <Link href="/users/student" className="text-white-smoke text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-gray-700 hover:bg-magic-mint hover:rounded-lg"
				>Students</Link>
			}
		],
		button: true
	},
	{
		title: <Link href="/users/parent">Parents</Link>,
		icon: ""
	},
	{
		title: "Records",
		icon: <FaThList />
	},
	{
		title: <Link href="/users/position">Positions</Link>,
		icon: ""
	},
	{
		title: <Link href="/users/year_level">Year Levels</Link>,
		icon: ""
	},
	{
		title: <button onClick={e => {
			destroyCookie(null, 'Admin')
			router.push('/login')
		}}>Log Out</button>,
		icon: <FaSignOutAlt />
	}

	]
	return (
		<div className="flex h-full">
			<div className={`h-full p-5 pt-8 ${open ? "w-48" : "w-20"}  relative duration-500 text-gray-300 bg-gray-700`} >

				<div>
					<IoIosArrowBack
						className={`w-6 h-6 bg-white  text=3xl rounded-3xl absolute
					-right-3 top-12  cursor-pointer duration-100 border border-gray-700 text-gray-700  ${!open && "rotate-180"}`}
						onClick={() => setOpen(!open)} />
				</div>

				<div className="sidebar-menu ">

					<ul className="pt-2">
						{Menus.map((menu: any, index: number) => (
							<div key={index}>
								<li
									className={`text-sm  flex items-center gap-x-4 cursor-pointer p-2 hover:bg-magic-mint rounded-2xl hover:text-black focus:bg-light-grey focus:text-black`}
								>
									<span className="text-xl bock float-left">
										{menu.icon ? menu.icon : <MdDashboard />}
									</span>

									<span
										className={`text-base font-sm flex-1 duration-200 ${!open && "hidden"}`}
										onClick={() => {
											setCurrentMenu(menu.title)
											setSubmenuOpen(!submenuOpen)
										}}
									>
										{menu.title}

									</span>
								</li>
								{
									//  submenuOpen && currentMenu === menu.title && open && (
									submenuOpen === open && currentMenu === menu.title && (
										<ul className="duration-500 bg-gray-600 rounded-lg">
											{menu.submenuItems.map((menu: any, index: any) => {
												return (
													<li
														key={index}
													>
														{menu.src}
													</li>
												);
											})}
										</ul>
									)
								}
							</div>
						))}
					</ul>
				</div>
			</div>
		</div >
	);
}