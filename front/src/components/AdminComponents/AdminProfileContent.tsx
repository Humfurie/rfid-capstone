

const AdminProfileContent = () => {
    return (
        <div className="w-full">
            <div className="w-full bg-white rounded-2xl border shadow-lg ">
                <div className="grid grid-cols-2 mx-auto">
                    <div className="p-2">

                        Image
                    </div>
                    <div className="p-4">
                        <div className="text-lg font-bold bg-light-grey rounded">
                            Contact Informaton
                        </div>
                        <div className="p-1">
                            <span className="font-semibold">Contact Number: </span>

                        </div>
                        <div className="p-1">
                            <span className="font-semibold">E-mail: </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminProfileContent;