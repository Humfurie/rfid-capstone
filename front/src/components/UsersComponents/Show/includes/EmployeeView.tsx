const EmployeeView = (props: any) => {
    const { user } = props
    return (
        <div className=" w-full h-full">
            <div className="grid grid-cols-2 bg-white shadow-lg w-fit h-fit mx-auto mt-3 rounded-2xl">

                <div className="mx-auto pt-3">
                    <div>
                        image
                    </div>
                    <div className="text-lg font-bold">
                        {user.first_name} {user.middle_name} {user.last_name}
                    </div>
                </div>

                <div className="border-[1px]-l p-2" >
                    <div>
                        <div className="bg-magic-mint p-1 rounded-lg font-bold">
                            Personal Information
                        </div>
                        <div className="p-2">
                            <div className="p-1">
                                <span className="font-semibold">Birthday: </span>
                                {user.birthdate}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Gender: </span>
                                {user.gender}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Address: </span>
                                {user.address}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-magic-mint p-1 rounded-lg font-bold">
                            School Information
                        </div>
                        <div className="p-2">
                            <div className="p-1">
                                <span className="font-semibold">Position: </span>
                                {user?.position[0]?.position}
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="bg-magic-mint p-1 rounded-lg font-bold">
                            Contact Information
                        </div>
                        <div className="p-2">
                            <div className="p-1">
                                <span className="font-semibold">E-mail: </span>
                                {user.email}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Contact Number: </span>
                                {user.contact_number}
                            </div>
                            <div className="p-1">
                                <span className="font-semibold">Facebook: </span>
                                {user.facebook}
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-magic-mint p-1 rounded-lg font-bold">
                            Emergency Contact
                        </div>
                        <div className="pt-4">
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