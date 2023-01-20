import { useContext, useState } from "react";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";
import StudentRegistration from "../UsersRegistrationComponents/StudentRegistration";
import SearchBar from "./SearchBar";
import StudentYearLevelFilter from "./StudentYearLevelFilter";

const UsersStudentsContent = () => {

    const {setRegistration} = useContext(FormContext)

    return (
        <div className="content">
        <div className="top-status-content ml-6 mt-6 inline-flex">
            <MyButton type='button' label='Add Student' onClick={(e: any) => {
                setRegistration(true)
            }}
                className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20%  font-medium rounded-lg text-sm px-4 py-2 "
            />
            <StudentRegistration />
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