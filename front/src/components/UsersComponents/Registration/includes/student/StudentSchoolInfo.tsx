import { useContext } from "react";
import { FormContext } from "../../../../../lib/FormContext";
import { Style } from "../../../../../lib/Style";

export const StudentSchoolInfo = () => {
    const {
        registration,
        setRegistration,
        userOnChange,
        emergencyOnChange,
        accountOnChange,
        userSubmit,
        setRole
    } = useContext(FormContext);
    return (
        <div>
            <h5 className={Style.registrationNavBar}>
                School Information
            </h5>
            <div className={Style.reg}>
                <div className="flex justify-center flex-col mt-1">
                    <label htmlFor="" className={Style.label}>
                        Student ID:
                    </label>
                    <input
                        type="number"
                        className={Style.inputType}
                        onChange={(e) => {
                            userOnChange(e.target.value, "studentId");
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
                        onChange={(e) => {
                            userOnChange(e.target.value, "schoolYear");
                        }}
                    >
                        <option selected disabled>
                            ---Select School Year---
                        </option>
                        <option value="grade 7">Grade 7</option>
                        <option value="grade 8">Grade 8</option>
                        <option value="grade 9">Grade 9</option>
                        <option value="grade 10">Grade 10</option>
                        <option value="grade 11">Grade 11</option>
                        <option value="grade 12">Grade 12</option>
                    </select>
                </div>
                <div className="flex justify-center flex-col mt-2">
                    <input
                        type="checkbox"
                        className={Style.inputType}
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