import Avatar from "@mui/material/Avatar";
import { Style } from "../../../../lib/Style";
import { grey, yellow } from "@mui/material/colors";

const EmployeeView = (props: any) => {
    const { user } = props

    return (
        <div className=" w-full h-full">
            <div className="grid grid-cols-2 ">

                <div className={` mx-auto pt-3 bg `}>
                    <div className="p-2">
                        <Avatar
                            alt={`${user.first_name}`}
                            src={`${process.env.NEXT_PUBLIC_API_URL + user.profilePic?.url}`}
                            sx={{ width: 300, height: 300, bgcolor: yellow[100], color: grey[700], border: '1px solid #bdbdbd' }}

                        />
                    </div>
                    <div className="p-2">
                        <div className={`${Style.viewName}`}>
                            {user.first_name} {user.middle_name} {user.last_name}
                        </div>
                    </div>

                </div>

                <div className=" p-1" >
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
                            <div className="p-0.5">
                                <span className="font-semibold">RFID Number: </span>
                                {user.rfid_number}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Position: </span>
                                {user?.position[0]?.position}
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
                        <div className="p-2">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeView;