import Link from "next/link";
import { FaUserAlt, FaUsers, FaThList, FaSignOutAlt } from "react-icons/fa"
import { RiTimerFill } from "react-icons/ri"
import { FormContext } from "../../../lib/FormContext";
import { useContext } from "react";
import { BsArrowLeft } from "react-icons/bs"
import { MdDashboard } from "react-icons/md"
const EmployeeNavbar = () => {

    const {
        open,
        setOpen,
        setCurrentMenu,
        currentMenu
    } = useContext(FormContext)

    const Menus = [
        {
            title: <Link href="">Profile</Link>,
            icon: <FaUserAlt />
        },
        {
            title: <Link href="">Acitvity</Link>,
            icon: <RiTimerFill />
        },
        {
            title: <Link href="">Logout</Link>,
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
                <div className="sidebar-menu">
                    <ul>
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
									
										}}
									>
										{menu.title}

										
									</span>

                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EmployeeNavbar;