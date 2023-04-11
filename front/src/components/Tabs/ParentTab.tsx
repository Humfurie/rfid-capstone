import Link from "next/link";
import { Style } from "../../lib/Style";

const ParentTab = () => {
    return (
        <div>
            <div className="flex bg-white w-full pt-3 pb-3 shadow-sm  border-powder-blue">
                <div className="pl-3">
                    <input
                        type="text"
                        className={`${Style.searchInput}`}
                    />
                    <label
                        htmlFor=""
                        className=" p-2 hover:bg-magic-mint hover:rounded-lg border-r-[1px] border-powder-blue text-sm"
                    >Search</label>


                </div>
                <div>
                    <Link
                        href={"/users/registration/parent"}
                        className=" border-r-[1px] border-powder-blue p-2 hover:bg-magic-mint hover:rounded-lg text-sm">
                        Add Parent
                    </Link>
                </div>

                <div>
                    <Link
                        href={""}
                        className=" border-r-[1px] border-powder-blue p-2 hover:bg-magic-mint hover:rounded-lg text-sm">
                        Export
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default ParentTab;