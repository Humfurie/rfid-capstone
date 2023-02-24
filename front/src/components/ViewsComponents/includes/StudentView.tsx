const StudentView = (props: any) => {
    const { user } = props
    return (
        <div className=" w-full h-full  p-6">
        <div className="border-2 border-powderblue-shades10% bg-white rounded w-full h-full ">
            <div className="text-lg text-center font-bold">
                Personal Information
            </div>
            <div>
                Name: {user.first_name} {user.middle_name} {user.last_name}
            </div>
            <div>
                Birthday: {user.birthdate}
            </div>
            <div>
                Gender: {user.gender}
            </div>
            <div>
                Address: {user.address}
            </div>
            <div className="text-lg text-center font-bold">
                School Information
            </div>
            <div>
                {/* Position: {user.yearLevel[0].year || null} */}
            </div>
            <div className="text-lg text-center font-bold">
                Contact Information
            </div>
            <div>
                E-mail: {user.email}
            </div>
            <div>
                Contact Number: {user.contact_number}
            </div>
            <div>
                Facebook: {user.facebook}
            </div>
            <div className="text-lg text-center font-bold">
                Emergency Contact
            </div>
            <div>
                Name: {user.emergencyContact.name}
            </div>
            <div>
                Contact Number: {user.emergencyContact.contact_number}
            </div>
            <div>
                E-mail: {user.emergencyContact.email}
            </div>
            <div>
                Facebook: {user.emergencyContact.facebook}
            </div>
        </div>

    </div>
    );
}

export default StudentView;