import { useState } from "react";
import MyButton from "../../lib/partials/MyButton";
import MyInput from "../../lib/partials/MyInput";
import UsersRegistrationForm from "../UsersRegistrationForm";
import SearchBar from "./SearchBar";
import StudentYearLevelFilter from "./StudentYearLevelFilter";

const UsersStudentsContent = () => {


    const [registration, setRegistration] = useState(false)
    return (
        <div className="content">
        <div className="top-status-content ml-6 mt-6 inline-flex">
            <MyButton type='button' label='Add Student' onClick={(e: any) => {
                setRegistration(true)
            }}
                className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20%  font-medium rounded-lg text-sm px-4 py-2 "
            />
            <UsersRegistrationForm registration={registration} setRegistration={setRegistration} />
            <div>
                <SearchBar />
            </div>
            <div className=" inset-y-0 left-full">
                <StudentYearLevelFilter/>
            </div>

        </div>
    </div>
    );


}

export default UsersStudentsContent;