import { useContext } from "react";
import { FormContext } from "../../../../../lib/FormContext";
import { Style } from "../../../../../lib/Style";

export const EmployeeSchoolInfo = () => {
    const {
        setPosition,
        apiPosition,
        position,
        userInfo,
        userOnChange
    } = useContext(FormContext);

    console.log(apiPosition)
    return (

        <div>
            <div >
                <div className="flex justify-center flex-col mt-2">
                    <label htmlFor="" className={Style.label}>
                        ID Number:
                    </label>
                    <input type="number"
                        className={Style.inputType}
                        value={userInfo.idNumber}
                        onChange={(e) => {
                            userOnChange(e.target.value, "idNumber")
                        }}
                    />

                    <label htmlFor="" className={Style.label}>
                        RFID Number:
                    </label>
                    <input type="number"
                        className={Style.inputType}
                        value={userInfo.rfidNumber}
                        onChange={(e) => {
                            userOnChange(e.target.value, "rfidNumber")
                        }}
                    />

                    <label htmlFor="" className={Style.label}>
                        Position:
                    </label>
                    <select
                        name="positions"
                        className={Style.inputType}
                        value={position}
                        onChange={(e) => {
                            setPosition(e.target.value);
                        }}
                    >
                        <option value=''>
                            ---Select Position---
                        </option>
                        {(apiPosition?.data || []).map((element: { id: number, position: string }, id: number) => {
                            return (
                                <>
                                    <option key={id} value={element.id}>{element.position}</option>
                                </>
                            )
                        })}

                    </select>
                </div>
            </div>
        </div>

    )
}