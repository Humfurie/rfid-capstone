import Link from "next/link";
import { Style } from "../../lib/Style";

const EmployeeTab = () => {
    return (
        <div>
            <div className="flex bg-white w-full pt-3 pb-3 shadow-sm border-b-[1px] border-powder-blue">
                <div className="pl-3">
                    <input
                        type="text"
                        className={`${Style.searchInput}`}
                    />
                    <label
                        htmlFor=""
                        className=" p-2 hover:bg-magic-mint hover:rounded-lg border-r-[1px] border-powder-blue"
                    >Search</label>


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
        </div >
    );
}

export default EmployeeTab;