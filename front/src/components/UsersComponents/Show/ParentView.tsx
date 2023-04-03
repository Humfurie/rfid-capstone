const ParentView = (props: any) => {
    const { user } = props

    return (
        <div className=" w-full h-full">
            <div className="border bg-white shadow-lg w-fit h-fit mx-auto mt-3">
                <div className="text-lg text-center font-bold bg-magic-mint p-2">
                    Personal Information
                </div>
                <div className="grid grid-cols-2 p-4">
                    <div>
                        <div className="p-2">
                            <span className="font-bold">Name: </span>
                            {user.first_name} {user.middle_name} {user.last_name}
                        </div>
                        <div className="p-2">
                            <span className="font-bold">Birthday: </span>
                             {user.birthdate}
                        </div>
                    </div>
                    <div>
                        <div className="p-2">
                            <span className="font-bold">
                            Gender: </span>
                             {user.gender}
                        </div>
                        <div className="p-2">
                            <span className="font-bold">Address: </span>
                            {user.address}
                        </div>
                    </div>

                </div>

                <div className="text-lg text-center text-white-smoke font-bold bg-teal-blue p-2">
                    Contact Information
                </div>
                <div className="grid grid-cols-2">
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
                        <div className="p-2">
                            <span className="font-bold">Facebook: </span>
                            {user.facebook}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ParentView;