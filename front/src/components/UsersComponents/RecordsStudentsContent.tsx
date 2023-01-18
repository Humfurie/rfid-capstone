import SearchBar from "./SearchBar";
import StudentYearLevelFilter from "./StudentYearLevelFilter";

const RecordsStudentsContent = () => {
    return (
        <div>
            <div className="records-parents-content">
            <div className="top-status-content ml-6 mt-6 inline-flex">
                <div>
                    <SearchBar />
                </div>
                <div className=" inset-y-0 left-full">
                <StudentYearLevelFilter/>
            </div>

            </div>

        </div>
        </div>
    );
}

export default RecordsStudentsContent;