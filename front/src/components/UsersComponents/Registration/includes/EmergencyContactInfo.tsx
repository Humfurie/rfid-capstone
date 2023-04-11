import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";

export const EmergencyContactInfo = () => {
    const {
        emergencyOnChange,
        emergency
    } = useContext(FormContext)

    return (
        <div>
            <div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Name:
                    </label>
                    <input
                        type="text"
                        className={Style.inputType}
                        value={emergency.name}
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
                        value={emergency.contactNumber}
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
                        value={emergency.email}
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
                        value={emergency.facebook}
                        onChange={(e) => {
                            emergencyOnChange(e.target.value, "facebook");
                        }}
                    />
                </div>
            </div>
        </div>
    )
}