import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";

export const ContactInfo = () => {
    const {
        userOnChange,
    } = useContext(FormContext)

    return (
        <div>
            <div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        E-mail:
                    </label>
                    <input
                        type="email"
                        className={Style.inputType}
                        onChange={(e) => {
                            userOnChange(e.target.value, "email");
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
                            userOnChange(e.target.value, "contactNumber");
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
                            userOnChange(e.target.value, "facebook");
                        }}
                    />
                </div>
            </div>
        </div>
    )
}