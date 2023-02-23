import React, { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs"
import { MdDashboard } from "react-icons/md"
import { FaUserAlt, FaUsers, FaThList, FaSignOutAlt } from "react-icons/fa"

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
	const Menus = [

		{
			title: <Link href="/admin/profile">Profile</Link>,
			icon: <FaUserAlt />,
		},
		{
			title: "Users",
			icon: <FaUsers />,
			submenu: true,
			submenuItems: [
				{
					src: <Link href="/users/UsersList/employee" className="text-gray-500 bg-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-powderblue-shades10% focus:bg-powderblue-shades10% active:bg-powderblue-shades10%"
					>Employees</Link>
				},
				{
					src: <Link href="/users/UsersList/student" className="text-gray-500 bg-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-powderblue-shades10% focus:bg-powderblue-shades10% "
					>Students</Link>
				}
			],
			button: true
		},
		{
			title: <Link href="/users/UsersList/parent">Parents</Link>,
			icon: ""
		},
		{
			title: "Records",
			icon: <FaThList />
		},
		{
			title: <Link href="/users/Positions/PositionsDashboard">Positions</Link>,
			icon: ""
		},
		{
			title: <Link href="/users/YearLevels/YearLevelDashboard">Year Levels</Link>,
			icon: ""
		},
		{
			title: <button onClick={e => {
				destroyCookie(null, 'Admin')
				router.push('/')
			}}>Log Out</button>,
			icon: <FaSignOutAlt />
		}

	]
	return (
		<div className="flex">
			<div className={`h-screen p-5 pt-8 ${open ? "w-48" : "w-20"}  relative bg-white duration-500 text-black border-r-[1px] border-powderblue-shades10%`}>

				<div>
					<BsArrowLeft className={`w-6 h-6 bg-white  text=3xl rounded-3xl absolute
					-right-3 top-9  cursor-pointer duration-100 border border-powderblue-shades10% ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

					{/* <span><img src="../" alt="" /></span> */}

					<Link href="/admin/dashboard" className={`inline-flex text-black font-extrabold text-2xl ${!open && "hidden"}`}> A I S - R F T </Link>

				</div>

				<div className="sidebar-menu ">

					<ul className="pt-2">
						{Menus.map((menu: any, index: number) => (
							<div key={index}>
								<li
									className={`text-sm text-gray-500 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-powderblue-shades10% rounded-2xl hover:text-black focus:bg-light-grey focus:text-black`}
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

										{menu.submenu}
									</span>
								</li>
								{
									menu.submenu && submenuOpen && currentMenu === menu.title && open && (
										<ul className="duration-500">
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