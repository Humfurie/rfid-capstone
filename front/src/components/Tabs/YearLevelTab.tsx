import { useContext, useState } from "react";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";
import { Style } from "../../lib/Style";

const YearLevelTab = () => {
    const {
        setYear,
        yearSubmit
    } = useContext(FormContext)

    const [inputValue, setInputValue] = useState('');

    const handleReloadInput = () => {
        setInputValue('');
    }
    return (
        <div>
            <div className="flex bg-white w-full pt-3 pb-3 shadow-sm border-b-[1px] border-powder-blue">
                <div className="pl-3">
                <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                yearSubmit()
                            }}
                        >
                            <input
                                type="text"
                                className={`${Style.searchInput}`}
                                onChange={(e) => {
                                    setYear(e.target.value)
                                    
                                }}
                            />
                            <MyButton
                                type="submit"
                                label="Add Year Level"
                                className=" p-2 hover:bg-magic-mint hover:rounded-lg border-r-[1px] border-powder-blue text-sm"
                                onClick={handleReloadInput}
                            />

                        </form>
                </div>
            </div>
        </div>
    );
}

export default YearLevelTab;