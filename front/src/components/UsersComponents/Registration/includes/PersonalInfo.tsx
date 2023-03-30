import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";

export const PersonalInfo = () => {
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
            <div >
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        First Name:
                    </label>
                    <input
                        type="text"
                        className={Style.inputType}
                        onChange={(e) => {
                            userOnChange(e.target.value, "firstname");
                        }}
                    />
                </div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Middle Name:
                    </label>
                    <input
                        type="text"
                        className={Style.inputType}
                        onChange={(e) => {
                            userOnChange(e.target.value, "middlename");
                        }}
                    />
                </div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Last Name:
                    </label>
                    <input
                        type="text"
                        className={Style.inputType}
                        onChange={(e) => {
                            userOnChange(e.target.value, "lastname");
                        }}
                    />
                </div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Birthday:
                    </label>
                    <input
                        type="date"
                        className={Style.inputType}
                        onChange={(e) => {
                            userOnChange(e.target.value, "birthday");
                        }}
                    />
                </div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Gender:
                    </label>
                    <select
                        className={Style.inputType}
                        onChange={(e) => {
                            userOnChange(e.target.value, "gender");
                        }}
                    >
                        <option value=''>
                            ---Select Gender---
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Address:
                    </label>
                    <input
                        type="text"
                        className={Style.inputType}
                        onChange={(e) => {
                            userOnChange(e.target.value, "address");
                        }}
                    />
                </div>
            </div>
        </div>
    )
}