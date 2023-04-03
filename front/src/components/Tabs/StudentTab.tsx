import Link from "next/link";

const StudentTab = () => {
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
                        href={"/users/registration/student"}
                        className=" border-r-[1px] border-powder-blue p-2 hover:bg-magic-mint hover:rounded-lg">
                        Add Student
                    </Link>
                </div>
                
                <div>
                    <Link
                        href={""}
                        className=" border-r-[1px] border-powder-blue p-2 hover:bg-magic-mint hover:rounded-lg">
                        Export
                    </Link>
                </div>
                <div>
                    <select
                    className=" border-r-[1px] border-powder-blue hover:bg-magic-mint hover:rounded-lg"
                    >
                        <option value="">Grade 7</option>
                        <option value="">Grader 8</option>
                    </select>
                </div>

            </div>
        </div>
    );
}

export default StudentTab;