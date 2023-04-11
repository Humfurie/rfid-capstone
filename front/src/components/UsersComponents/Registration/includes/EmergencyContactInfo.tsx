import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";
import TextField from "@mui/material/TextField";

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
                    <TextField
                        variant="filled"
                        size="small"
                        type="text"
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
                    <TextField
                        variant="filled"
                        size="small"
                        type="number"
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
                    <TextField
                        variant="filled"
                        size="small"
                        type="email"
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
                    <TextField
                        variant="filled"
                        size="small"
                        type="text"
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