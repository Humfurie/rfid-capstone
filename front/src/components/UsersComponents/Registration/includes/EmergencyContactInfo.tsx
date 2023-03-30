import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";

export const EmergencyContactInfo = () => {
    const {
        emergencyOnChange,
    } = useContext(FormContext)

    return (
        <div>
            <h5 className={Style.registrationNavBar}>
                Emergency Contact
            </h5>

            <div className={Style.reg}>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Name:
                    </label>
                    <input
                        type="text"
                        className={Style.inputType}
                        onChange={(e) => {
                            emergencyOnChange(e.target.value, "name");
                        }}
                    />
                </div>

                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Contact Number:
                    </label>
                    <input
                        type="number"
                        className={Style.inputType}
                        onChange={(e) => {
                            emergencyOnChange(e.target.value, "contactNumber");
                        }}
                    />
                </div>

                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Email:
                    </label>
                    <input
                        type="email"
                        className={Style.inputType}
                        onChange={(e) => {
                            emergencyOnChange(e.target.value, "email");
                        }}
                    />
                </div>

                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Facebook:
                    </label>
                    <input
                        type="text"
                        className={Style.inputType}
                        onChange={(e) => {
                            emergencyOnChange(e.target.value, "facebook");
                        }}
                    />
                </div>
            </div>
        </div>
    )
}