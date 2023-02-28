import SearchBar from "../../SearchBar";
import RecordsDataTable from "../DataTable/RecordsDataTable";
import StudentYearLevelFilter from "./StudentYearLevelFilter";

const RecordsList = (props: any) => {
    const { records } = props
    return (
        <div>
            <div className="records-parents-content">
                <div className="top-status-content ml-6 mt-6 inline-flex">
                    <div>
                        <SearchBar />
                    </div>
                    <div className=" inset-y-0 left-full">
                        {/* 
                make a table for records which has a condition for employee and student
                */}
                <RecordsDataTable records={records} />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default RecordsList;