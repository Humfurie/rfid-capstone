import Link from "next/link";

const EmployeeTab = () => {
    return (
        <div>
            <div className="flex bg-white w-full pt-3 pb-3 shadow-sm border-b-[1px] border-powder-blue">
                <div>
                    <Link
                        href={""}
                        className=" border-r-[1px] border-powder-blue p-2 hover:bg-magic-mint hover:rounded-lg">
                        Search
                    </Link>

                </div>
                <div>
                    <Link
                        href={"/users/registration/employee"}
                        className=" border-r-[1px] border-powder-blue p-2 hover:bg-magic-mint hover:rounded-lg">
                        Add Employee
                    </Link>
                </div>

                <div>
                    <Link
                        href={""}
                        className=" border-r-[1px] border-powder-blue p-2 hover:bg-magic-mint hover:rounded-lg">
                        Export
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default EmployeeTab;