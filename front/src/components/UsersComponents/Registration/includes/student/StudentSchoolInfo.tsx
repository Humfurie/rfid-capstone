import { useContext } from "react";
import { FormContext } from "../../../../../lib/FormContext";
import { Style } from "../../../../../lib/Style";

export const StudentSchoolInfo = () => {
    const {
        userOnChange,
        userInfo,
        apiYearLevel
    } = useContext(FormContext);
    return (
        <div>
            <div>
                <div className="flex justify-center flex-col mt-1">
                    <label htmlFor="" className={Style.label}>
                        Student ID:
                    </label>
                    <input
                        type="number"
                        className={Style.inputType}
                        value={userInfo.idNumber}
                        onChange={(e) => {
                            userOnChange(e.target.value, "idNumber");
                        }}
                    />
                </div>

                <div className="flex justify-center flex-col mt-2">
                    <label htmlFor="" className={Style.label}>
                        School Year:
                    </label>
                    <select
                        name=""
                        id=""
                        className={Style.inputType}
                        value={userInfo.schoolYear}
                        onChange={(e) => {
                            userOnChange(e.target.value, "schoolYear");
                        }}
                    >
                        <option selected disabled>
                            ---Select School Year---
                        </option>
                        {(apiYearLevel?.data || []).map((yearLevel: { id: number, year: string }, id: number) => {
                            return (
                                <>
                                    <option key={id} value={yearLevel.id}>{yearLevel.year}</option>
                                </>
                            )
                        })}
                    </select>
                </div>
                <div className="flex justify-center flex-col mt-2">
                    <input
                        type="checkbox"
                        className={Style.inputType}
                        value={userInfo.schoolYear}
                        onChange={(e) => {
                            userOnChange(e.target.value, "schoolYear");
                        }}
                    />
                    <label htmlFor="" className={Style.label}>
                        Alumni
                    </label>
                </div>
            </div>
        </div>
    )
}