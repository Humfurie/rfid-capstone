import { useContext, useState } from "react";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";
import EmployeeRegistration from "../UsersRegistrationComponents/EmployeeRegistration";
import SearchBar from "./SearchBar";


const UsersEmployeesContent = () => {
    
    const {setRegistration} = useContext(FormContext)

    return (
        <div className="content">
            <div className="top-status-content ml-6 mt-6 inline-flex">
                <MyButton type='button' label='Add Employee' onClick={(e: any) => {
                    setRegistration(true)
                }}
                    className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20%  font-medium rounded-lg text-sm px-4 py-2 "
                />
                <EmployeeRegistration />
                <div>
                    <SearchBar />
                </div>

            </div>
        </div>
    );
}

export default UsersEmployeesContent;