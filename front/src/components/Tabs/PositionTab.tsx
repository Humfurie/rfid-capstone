import { useContext } from "react";
import { FormContext } from "../../lib/FormContext";
import MyButton from "../../lib/partials/MyButton";
import { Style } from "../../lib/Style";

const PositionTab = () => {
    const { positionSubmit,
        setPosition, position
    } = useContext(FormContext)
    return (
        <div>
            <div className="flex bg-white w-full pt-3 pb-3 shadow-sm  border-powder-blue">
                <div className="pl-3">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            positionSubmit()
                        }}
                    >
                        <input
                            type="text"
                            value={position}
                            className={`${Style.searchInput}`}
                            onChange={(e) => {
                                setPosition(e.target.value)
                            }}
                            required
                        />


                        <MyButton
                            type="submit"
                            label="Add Position"
                            className="pr-2 pl-2 hover:bg-magic-mint hover:rounded-lg border-r-[1px] border-powder-blue text-sm"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PositionTab;