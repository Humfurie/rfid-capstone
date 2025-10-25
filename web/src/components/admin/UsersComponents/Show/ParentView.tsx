import Avatar from "@mui/material/Avatar";
import { Style } from "../../../lib/Style";
import { blue, grey, yellow } from "@mui/material/colors";

const ParentView = (props: any) => {
    const { user } = props
   
    return (
        <div className=" w-full h-full">
            <div className="grid grid-cols-2">
                <div className={` mx-auto pt-3 bg `}>
                    <div className="p-2">
                        <Avatar
                            alt={`${user.first_name}`}
                            src={`${process.env.NEXT_PUBLIC_API_URL + user.profilePic?.url}`}
                            sx={{ width: 300, height: 300, bgcolor: yellow[100], color: grey[700], border: '1px solid #bdbdbd'}}
                            
                        />
                    </div>
                    <div className="p-2">
                        <div className={`${Style.viewName}`}>
                            {user.first_name} {user.middle_name} {user.last_name}
                        </div>
                    </div>

                </div>
                <div>
                    <div className={`${Style.infoHeader}`}>
                        Personal Information
                    </div>

                    <div className="p-2">
                        <span className="font-bold">Name: </span>
                        {user.first_name} {user.middle_name} {user.last_name}
                    </div>
                    <div className="p-2">
                        <span className="font-bold">Birthday: </span>
                        {user.birthdate}
                    </div>

                    <div className="p-2">
                        <span className="font-bold">
                            Gender: </span>
                        {user.gender}
                    </div>
                    <div className="p-2">
                        <span className="font-bold">Address: </span>
                        {user.address}
                    </div>
                    <div className={`${Style.infoHeader}`}>
                        Contact Information
                    </div>
                    <div className="p-2">
                        <span className="font-bold">E-mail: </span>
                        {user.email}
                    </div>
                    <div className="p-2">
                        <span className="font-bold">Contact Number: </span>
                        {user.contact_number}
                    </div>

                    <div className="p-2">
                        <span className="font-bold">Facebook: </span>
                        {user.facebook}
                    </div>
                </div>





            </div>
        </div>

    )
}

export default ParentView;