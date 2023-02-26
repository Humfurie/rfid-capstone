import SearchBar from "../../SearchBar";
import StudentYearLevelFilter from "./StudentYearLevelFilter";

const RecordsList = () => {
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
            </div>

            </div>

        </div>
        </div>
    );
}

export default RecordsList;