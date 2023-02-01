
const StudentProfileContent = () => {
    return (
        <div className="admin-profile">
            <div className="ml-5 mt-20 bg-white p-6 rounded-lg border border-powderblue-shades10% shadow-lg">
                <div className="grid grid-rows-2 gap-10">
                    <div className="grid grid-cols-2 gap-10">
                        <div>Profile Pic</div>
                        <div className="border-b-[2px] border-powderblue-shades10%">
                            <input type="text"
                                value="Admin's Name" className="bg-white p-8 pr-80"
                                disabled
                            />

                        </div>
                    </div>
                    <div className="border-t-[2px] border-powderblue-shades10% p-5">
                        <div className="grid grid-cols-2 gap-4">

                            <div className="">
                                <div className="mt-5">
                                    <label htmlFor=""
                                        className="border-b-[2px] border-powderblue-shades10% rounded-t-lg p-1 font-bold bg-powderblue-shades10%">
                                        Contact Number:
                                    </label>
                                    <input type="text"
                                        value="09123456789"
                                        disabled
                                        className="border border-powderblue-shades10% rounded-b-lg p-1 w-full mt-1" />

                                </div>
                                <div className="mt-5">
                                    <label htmlFor=""
                                        className="border-b-[2px] border-powderblue-shades10% rounded-t-lg p-1 font-bold bg-powderblue-shades10%">
                                        E-mail:
                                    </label>
                                    <input type="text"
                                        value="admin@gmail.com"
                                        disabled
                                        className="border border-powderblue-shades10% rounded-b-lg p-1 w-full mt-1" />
                                </div>

                            </div>
                            <div className="items-left ">
                                <div className="mt-5">
                                    <label htmlFor=""
                                        className="border-b-[2px] border-powderblue-shades10% rounded-t-lg p-1 font-bold bg-powderblue-shades10%"
                                    >Username :
                                    </label>
                                    <input type="text"
                                        value="09123456789"
                                        disabled
                                        className="border border-powderblue-shades10% rounded-b-lg p-1 w-full mt-1" />

                                </div>
                                <div className="mt-5" >
                                    <label htmlFor=""
                                        className="border-b-[2px] border-powderblue-shades10% rounded-t-lg p-1 font-bold bg-powderblue-shades10%">
                                        Password:
                                    </label>
                                    <input type="text"
                                        value="admin@gmail.com"
                                        disabled
                                        className="border border-powderblue-shades10% rounded-b-lg p-1 w-full mt-1" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfileContent;