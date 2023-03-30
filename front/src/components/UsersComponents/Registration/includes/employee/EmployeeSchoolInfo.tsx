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
            <h5 className={Style.registrationNavBar}>
                School Information
            </h5>
            <div className={Style.reg}>
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