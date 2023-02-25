import { useContext } from "react";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";
import YearLevelDataTable from "../DataTable/YearLevelDataTable";

const YearLevelDashboardContent = () => {
    const {
        setYear,
        yearSubmit
 } = useContext(FormContext)

    return (
        <div className="flex flex-col w-screen">
            <div className="flex flex-row top-status-content ml-6 mt-6 w-full">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        yearSubmit()
                    }}
                >
                    <input
                        type="text"
                        onChange={(e) => {
                            setYear(e.target.value)
                        }}
                    />
                    <MyButton
                        type="submit"
                        label="Add Year Level" 
                        className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20% font-medium rounded-r-lg text-sm px-4 py-2 "
                        />

                </form>
            </div>
            <div className="flex flex-row top-status-content ml-6 mt-6 w-full">
                list of year levels
                <YearLevelDataTable />
            </div>
        </div>
    );
}

export default YearLevelDashboardContent;