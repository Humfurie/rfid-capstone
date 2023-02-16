import { useContext } from "react";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";

const PositionDashboardContent = () => {
    const {
        positionOnChange,
        positionSubmit

    } = useContext(FormContext)
    return (
        <div className="flex flex-col w-screen">
            <div className="flex flex-row top-status-content ml-6 mt-6 w-full">
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        positionSubmit()
                    }}
                >
                    <input
                        type="text"
                        onChange={(e) => {
                            positionOnChange(e.target.value, "position")
                        }}
                    />
                    

                    <MyButton
                        type="button"
                        label="Add Position"
                        className="text-black bg-powderblue-shades10% hover:bg-powderblue-shades20% font-medium rounded-r-lg text-sm px-4 py-2 "
                    />
                </form>

            </div>
            <div className="flex flex-row top-status-content ml-6 mt-6 w-full">
                list of positions
            </div>
        </div>
    );
}

export default PositionDashboardContent;