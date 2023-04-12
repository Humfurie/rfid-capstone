import { useContext, useState } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";

const StudentView = (props: any) => {
    const { user } = props

    const [infoOpen, setInfoOpen] = useState(false)
    // const [submenuOpen, setSubmenuOpen] = useState(false)
    const [currentInfo, setCurrentInfo] = useState("")
    const [open, setOpen] = useState(true)

    console.log('currentInfo', infoOpen, currentInfo)

    return (
        <div className=" w-full h-full">
            <div className="grid grid-cols-2">

                <div className="mx-auto pt-3">
                    <div>
                        image
                    </div>
                    <div className="text-lg font-bold">
                        {user.first_name} {user.middle_name} {user.last_name}
                    </div>
                </div>

                <div className="p-1" >
                    <div>
                        <div className={`${Style.infoHeader}`}>
                            Personal Information
                        </div>
                        <div className="p-1">
                            <div className="p-0.5">
                                <span className="font-semibold">Birthday: </span>
                                {user.birthdate}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Gender: </span>
                                {user.gender}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Address: </span>
                                {user.address}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`${Style.infoHeader}`}>
                            School Information
                        </div>
                        <div className="p-1">
                            <div className="p-0.5">
                                <span className="font-semibold">ID Number: </span>
                                {user.id_number}
                            </div>

                            <div className="p-10.5">
                                <span className="font-semibold"> Year Level: </span>
                                {user?.yearLevel[0]?.year}
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className={`${Style.infoHeader}`}>
                            Contact Information
                        </div>
                        <div className="p-1">
                            <div className="p-0.5">
                                <span className="font-semibold">E-mail: </span>
                                {user.email}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Contact Number: </span>
                                {user.contact_number}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Facebook: </span>
                                {user.facebook}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={`${Style.infoHeader}`}>
                            Emergency Contact
                        </div>
                        <div className="pt-2">
                            <div className="p-0.5">
                                <span className="font-semibold">Name: </span>
                                {user.emergencyContact.name}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Contact Number: </span>
                                {user.emergencyContact.contact_number}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">E-mail: </span>
                                {user.emergencyContact.email}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Facebook: </span>
                                {user.emergencyContact.facebook}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentView;