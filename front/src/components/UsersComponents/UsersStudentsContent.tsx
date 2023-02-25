import { useContext, useState } from "react";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";
import StudentRegistration from "../UsersRegistrationComponents/StudentRegistration";
import SearchBar from "../SearchBar";
import StudentYearLevelFilter from "./RecordsComponents/StudentYearLevelFilter";
import UsersDataTable from "../DataTable/UsersDataTable";

const UsersStudentsContent = (props: any) => {
    const { users } = props

    const { setRegistration } = useContext(FormContext)

    return (
        <div className="flex flex-col w-screen">
            <div className="flex flex-row top-status-content ml-6 mt-6 w-full">
                <div>
                    <MyButton
                        type="button"
                        label="Add Student"
                        onClick={(e: any) => {
                            setRegistration(true);
                        }}
                        className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20%  font-medium rounded-lg text-sm px-4 py-2 "
                    />
                </div>
                <div>
                    <SearchBar />
                </div>
                <div className=" inset-y-0 left-full">
                    <StudentYearLevelFilter />
                </div>
            </div>
            <div className="flex ml-6 mt-6 max-w-full min-w-min ">
                <UsersDataTable users={users}/>
            </div>
            <StudentRegistration />
        </div>
    );
}

export default UsersStudentsContent;