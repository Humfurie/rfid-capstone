import { useState } from "react";
import MyButton from "../../lib/partials/MyButton";
import UsersRegistrationForm from "../UsersRegistrationForm";
import SearchBar from "./SearchBar";


const UsersEmployeesContent = () => {
    const [registration, setRegistration] = useState(false)
    return (
        <div className="content">
            <div className="top-status-content ml-6 mt-6 inline-flex">
                <MyButton type='button' label='Add Employee' onClick={(e: any) => {
                    setRegistration(true)
                }}
                    className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20%  font-medium rounded-lg text-sm px-4 py-2 "
                />
                <UsersRegistrationForm registration={registration} setRegistration={setRegistration} />
                <div>
                    <SearchBar />
                </div>

            </div>
        </div>
    );
}

export default UsersEmployeesContent;