import { useContext } from "react";
import { FormContext } from "../../../../../lib/FormContext";
import { Style } from "../../../../../lib/Style";

export const EmployeeSchoolInfo = () => {
    const {
        setPosition,
        apiPosition
    } = useContext(FormContext);
    return (

        <div>
            <div >
                <div className="flex justify-center flex-col mt-2">
                    <label htmlFor="" className={Style.label}>
                        Position:
                    </label>
                    <select
                        name="positions"
                        className={Style.inputType}
                        onChange={(e) => {
                            setPosition(e.target.value);
                        }}
                    >
                        <option value=''>
                            ---Select Position---
                        </option>
                        {apiPosition.map((element: { id: number, position: string }, id: number) => (
                            <>
                                <option key={id} value={element.id}>{element.position}</option>
                            </>
                        ))}

                    </select>
                </div>
            </div>
        </div>

    )
}