import { useRouter } from "next/router";
import { useContext } from "react";
import { FormContext } from "../../../../../lib/FormContext";
import { Style } from "../../../../../lib/Style";

export const EmployeePersonalInfo = () => {
    const {
        userInfo,
        userOnChange,
    } = useContext(FormContext);

    return (
        <div>
            <div className={Style.registrationNavBar}>
                Personal Information
            </div>
            <div className={Style.reg}>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        First Name:
                    </label>
                    <input
                        type="text"
                        value={userInfo.firstName}
                        className={Style.inputType}
                        onChange={(e) => {
                            userOnChange(e.target.value, "firstName");
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
                            userOnChange(e.target.value, "middleName");
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
                            userOnChange(e.target.value, "lastName");
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
                            userOnChange(e.target.value, "birthdate");
                        }}
                    />
                </div>

                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Gender:
                    </label>
                    <select
                        name=""
                        id=""
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
    );
}
