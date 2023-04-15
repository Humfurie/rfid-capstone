import { useContext } from "react";
import { Style } from "../../lib/Style";
import { FormContext } from "../../lib/FormContext";
import Avatar from "@mui/material/Avatar";
import { grey, yellow } from "@mui/material/colors";

const ParentProfileContent = () => {
    const { data } = useContext(FormContext)
    return (
        <div className=" w-full h-full">
            <div className="grid grid-cols-2 ">

                <div className={` mx-auto pt-3 bg `}>
                    <div className="p-2">
                        <Avatar
                            alt={`${data?.data.first_name}`}
                            src={`${process.env.NEXT_PUBLIC_API_URL + data?.data.profilePic?.url}`}
                            sx={{ width: 300, height: 300, bgcolor: yellow[100], color: grey[700], border: '1px solid #bdbdbd' }}

                        />
                    </div>
                    <div className="p-2">
                        <div className={`${Style.viewName}`}>
                            {data?.data.first_name} {data?.data.middle_name} {data?.data.last_name}
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
                                {data?.data.birthdate}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Gender: </span>
                                {data?.data.gender}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Address: </span>
                                {data?.data.address}
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
                                {data?.data.email}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Contact Number: </span>
                                {data?.data.contact_number}
                            </div>
                            <div className="p-0.5">
                                <span className="font-semibold">Facebook: </span>
                                {data?.data.facebook}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParentProfileContent;