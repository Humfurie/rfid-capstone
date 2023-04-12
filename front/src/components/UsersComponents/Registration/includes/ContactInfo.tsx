import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";
import TextField from "@mui/material/TextField";

export const ContactInfo = () => {
    const {
        userOnChange,
        userInfo
    } = useContext(FormContext)

    return (
        <div>
            <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    E-mail
                </label>
                <TextField
                    variant="standard"
                    size="small"
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => {
                        userOnChange(e.target.value, "email");
                    }}
                />

            </div>
            <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    Contact Number
                </label>
                <TextField
                    variant="standard"
                    size="small"
                    type="number"
                    value={userInfo.contactNumber}
                    onChange={(e) => {
                        userOnChange(e.target.value, "contactNumber");
                    }}
                />

            </div>
            <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    Facebook
                </label>
                <TextField
                    variant="standard"
                    size="small"
                    type="text"
                    value={userInfo.facebook}
                    onChange={(e) => {
                        userOnChange(e.target.value, "facebook");
                    }}
                />
            </div>
        </div>

    )
}