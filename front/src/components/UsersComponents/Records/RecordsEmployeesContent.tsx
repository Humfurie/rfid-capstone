import Export from "../../Export";
import RecordsDateFilter from "./RecordsDateFilter";
import SearchBar from "../../SearchBar";

export default function RecordsEmployeesContent() {
    return (
        <div className="records-employees-content">
            <div className="top-status-content ml-6 mt-6 inline-flex">
                <div>
                    <Export/>
                </div>
                <div className="mr-10">
                    <SearchBar 
                    />
                </div>
                <div className="mr-10">
                    <RecordsDateFilter
                    />
                </div>

            </div>

        </div>
    );
}

