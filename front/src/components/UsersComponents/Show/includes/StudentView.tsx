import { useContext, useState } from "react";
import { FormContext } from "../../../../lib/FormContext";

const StudentView = (props: any) => {
    const { user } = props

    const [infoOpen, setInfoOpen] = useState(false)
    // const [submenuOpen, setSubmenuOpen] = useState(false)
    const [currentInfo, setCurrentInfo] = useState("")
    const [open, setOpen] = useState(true)

    console.log('currentInfo', infoOpen, currentInfo)

    const Infos = [
        {
            title: "Personal Information",
            moreInfo: true,
            infoItems: [
                {
                    items: (
                        <div className="p-4">
                            <div className="p-1">
                                <span className="font-semibold">Birthday: </span>
                                {user.birthdate}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Gender: </span>
                                {user.gender}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Address: </span>
                                {user.address}
                            </div>
                        </div>
                    )
                }
            ],
        },
        {
            title: "School Information",
            moreInfo: true,
            infoItems: [
                {
                    items: (
                        <div className="p-4">
                            <div className="p-1">
                                <span className="font-semibold">Birthday: </span>
                                {user.birthdate}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Gender: </span>
                                {user.gender}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Address: </span>
                                {user.address}
                            </div>
                        </div>
                    )
                }
            ],

        },
        {
            title: " Contact Information",
            moreInfo: true,
            infoItems: [
                {
                    items: (
                        <div className="p-4">
                            <div className="p-1">
                                <span className="font-semibold">E-mail: </span>
                                {user.email}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Contact Number: </span>
                                {user.contact_number}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Facebook: </span>
                                {user.facebook}
                            </div>
                        </div>
                    )
                }
            ],
        },
        {
            title: "Emergency Contact",
            moreInfo: true,
            infoItems: [
                {
                    items: (
                        <div className="p-4">
                            <div className="p-1">
                                <span className="font-semibold">Name: </span>
                                {user.emergencyContact.name}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Contact Number: </span>
                                {user.emergencyContact.contact_number}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">E-mail: </span>
                                {user.emergencyContact.email}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Facebook: </span>
                                {user.emergencyContact.facebook}
                            </div>
                        </div>
                    )
                }
            ],

        }
    ]
    return (
        <div className=" w-full h-full">
            <div className="grid grid-cols-2 border bg-white shadow-lg w-fit h-fit mx-auto mt-3 rounded-2xl">

                <div className="mx-auto pt-3">
                    <div>
                        image
                    </div>
                    <div className="text-lg font-bold">
                        {user.first_name} {user.middle_name} {user.last_name}
                    </div>
                </div>

                <div className="border-[1px]-l p-2" >
                    <ul>
                        {Infos.map((menu: any, index: number) => (
                            <div key={index}>
                                <li>
                                    <span
                                        onClick={() => {
                                            setCurrentInfo(menu.title)
                                            setInfoOpen(!infoOpen)
                                        }}
                                    >
                                        <p className="text-lg font-bold bg-light-grey rounded hover:bg-gray-200 hover:cursor-pointer">
                                            <span className="flex pl-3">
                                                {menu.title}
                                            </span>
                                        </p>
                                    </span>
                                </li>
                                {infoOpen === true && currentInfo === menu.title && (
                                    <ul className="duration-500">
                                        {menu.infoItems.map((menu: any, index: any) => {
                                            return (
                                                <li
                                                    key={index}
                                                >
                                                    {menu.items}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )
                                }
                            </div>
                        ))}
                    </ul>

                    {/* 
                    <div className="p-4">
                        <div className="p-1">
                            <span className="font-semibold">Birthday: </span>
                            {user.birthdate}
                        </div>
                        <div className="p-1">
                            <span className="font-semibold">Gender: </span>
                            {user.gender}
                        </div>
                        <div className="p-1">
                            <span className="font-semibold">Address: </span>
                            {user.address}
                        </div>
                    </div>
                    
                    <div className="p-4">
                        <div className="p-1">
                            <span className="font-semibold">ID Number: </span>
                        </div>

                        <div className="p-1">
                            <span className="font-semibold"> School Year:</span>
                        </div>
                        {/* Position: {user.yearLevel[0].year || null} */}
                    {/* </div>
                   
                    <div className="p-4">
                        <div className="p-1">
                            <span className="font-semibold">E-mail: </span>
                            {user.email}
                        </div>
                        <div className="p-1">
                            <span className="font-semibold">Contact Number: </span>
                            {user.contact_number}
                        </div>
                        <div className="p-1">
                            <span className="font-semibold">Facebook: </span>
                            {user.facebook}
                        </div>
                    </div>
                    <div className="pt-4">
                        <div className="p-1">
                            <span className="font-semibold">Name: </span>
                            {user.emergencyContact.name}
                        </div>
                        <div className="p-1">
                            <span className="font-semibold">Contact Number: </span>
                            {user.emergencyContact.contact_number}
                        </div>
                        <div className="p-1">
                            <span className="font-semibold">E-mail: </span>
                            {user.emergencyContact.email}
                        </div>
                        <div className="p-1">
                            <span className="font-semibold">Facebook: </span>
                            {user.emergencyContact.facebook}
                        </div>
                    </div>  */}
                </div>
            </div>
        </div>
    );
}

export default StudentView;