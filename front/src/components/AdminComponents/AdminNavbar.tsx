import React, { useContext } from "react";
import { useState } from 'react';
import { BsArrowLeft, BsChevronUp } from "react-icons/bs"
import { MdDashboard } from "react-icons/md"
import { FaUserAlt, FaUsers, FaThList, FaSignOutAlt } from "react-icons/fa"

import Link from "next/link";
import { FormContext } from "../../lib/FormContext";


export default function AdminNavbar() {

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
			title: <Link href="../AdminProfile">Profile</Link>,
			icon: <FaUserAlt />,
		},
		{
			title: "Users",
			icon: <FaUsers />,
			submenu: true,
			submenuItems: [
				{
					src: <Link href="../UsersEmployeesDashboard" className="text-gray-500 bg-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-powderblue-shades10% focus:bg-powderblue-shades10% active:bg-powderblue-shades10%"
					>Employees</Link>
				},
				{
					src: <Link href="../UsersStudentsDashboard" className="text-gray-500 bg-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-powderblue-shades10% focus:bg-powderblue-shades10% "
					>Students</Link>
				},
				{
					src: <Link href="../UsersParentsDashboard" className="text-gray-500 bg-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-powderblue-shades10% focus:bg-powderblue-shades10%"
					>Parents</Link>
				}
			],
			button: true

		},
		{
			title: "Records",
			icon: <FaThList />,
			submenu: true,
			submenuItems: [
				{
					src: <Link href="./RecordsEmployeesDashboard" className="text-gray-500 bg-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-powderblue-shades10% active:bg-powderblue-shades10%"
					>Employees</Link>
				},
				{
					src: <Link href="./RecordsStudentsDashboard" className="text-gray-500 bg-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-powderblue-shades10% "
					>Students</Link>
				},
				{
					src: <Link href="./RecordsParentsDashboard" className="text-gray-500 bg-gray-100 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-black hover:bg-powderblue-shades10% "
					>Parents</Link>
				}
			],
		},
		{
			title: "Log out",
			icon: <FaSignOutAlt />
		}

	]
	return (
		<div className="flex">
			<div className={`h-screen p-5 pt-8 ${open ? "w-48" : "w-20"}  relative bg-white duration-500 text-black border-r-[1px] border-powderblue-shades10%`}>

				<div>
					<BsArrowLeft className={`w-6 h-6 bg-white  text=3xl rounded-3xl absolute
					-right-3 top-9  cursor-pointer duration-100 border border-powderblue-shades10% ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />

					<span><img src="../" alt="" /></span>

					<Link href="./Admin" className={`inline-flex logo text-black font-extrabold text-2xl ${!open && "hidden"}`}> A I S - R F T </Link>

				</div>

				<div className="sidebar-menu ">

					<ul className="pt-2">
						{Menus.map((menu: any, index: any) => (
							<>
								<li
									key={index}
									className={`text-sm text-gray-500 flex items-center gap-x-4 cursor-pointer p-2 hover:bg-powderblue-shades10% rounded-2xl hover:text-black focus:bg-light-grey focus:text-black`}
								>
									<span className="text-xl bock float-left">
										{menu.icon ? menu.icon : <MdDashboard />}
									</span>

									<span
										className={`text-base font-sm flex-1 duration-200 ${!open && "hidden"}`}
										id={index}
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
							</>
						))}
					</ul>
				</div>
			</div>
		</div >
	);
}