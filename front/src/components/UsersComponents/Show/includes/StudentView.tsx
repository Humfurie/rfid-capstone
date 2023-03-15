import { Calendar } from "@mantine/dates";
import Calendars from "../../../Calendars";

const StudentView = (props: any) => {
    const { user } = props
    return (
        <div className=" w-full h-full">
            <div className="grid grid-cols-2 border bg-white shadow-lg w-fit h-fit mx-auto mt-3 rounded-lg">

                <div className="mx-auto pt-3">
                    <div>
                        image
                    </div>
                    <div >
                        {user.first_name} {user.middle_name} {user.last_name}
                    </div>
                </div>

                <div className="border-[1px]-l">
                    <div className="text-lg text-center font-bold bg-magic-mint">
                        Personal Information
                    </div>
                    <div className="grid grid-cols-2 p-4">
                        <div>

                            <div className="p-2">
                                <span className="font-bold">Birthday: </span>
                                {user.birthdate}
                            </div>
                        </div>
                        <div>
                            <div className="p-2">
                                <span className="font-bold">Gender: </span>
                                {user.gender}
                            </div>
                            <div className="p-2">
                                <span className="font-bold">Address: </span>
                                {user.address}
                            </div>
                        </div>
                    </div>
                    <div className="text-lg text-center font-bold bg-powder-blue p-2">
                        School Information
                    </div>
                    <div className="grid grid-cols-2 p-4">
                        <div>
                            <div className="p-2">
                                <span className="font-bold">ID Number: </span>
                            </div>
                        </div>
                        <div>
                            <div className="p-2">
                                <span className="font-bold"> School Year:</span>
                            </div>
                        </div>
                        {/* Position: {user.yearLevel[0].year || null} */}
                    </div>
                    <div className="text-lg text-center text-white-smoke font-bold bg-teal-blue p-2">
                        Contact Information
                    </div>
                    <div className="grid grid-cols-2 p-4">
                        <div>
                            <div className="p-2">
                                <span className="font-bold">E-mail: </span>
                                {user.email}
                            </div>
                            <div className="p-2">
                                <span className="font-bold">Contact Number: </span>
                                {user.contact_number}
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="font-bold">Facebook: </span>
                                {user.facebook}
                            </div>
                        </div>
                    </div>


                    <div className="text-lg text-center text-white-smoke font-bold bg-red-400">
                        Emergency Contact
                    </div>
                    <div className="grid grid-cols-2 p-4">
                        <div>
                            <div className="p-2">
                                <span className="font-bold">Name: </span>
                                {user.emergencyContact.name}
                            </div>
                            <div className="p-2">
                                <span className="font-bold">Contact Number: </span>
                                {user.emergencyContact.contact_number}
                            </div>
                        </div>
                        <div>
                            <div className="p-2">
                                <span className="font-bold">E-mail: </span>
                                {user.emergencyContact.email}
                            </div>
                            <div className="p-2">
                                <span className="font-bold">Facebook: </span>
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