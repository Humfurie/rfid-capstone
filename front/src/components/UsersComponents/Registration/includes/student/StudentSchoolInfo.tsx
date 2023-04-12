import { useContext } from "react";
import { FormContext } from "../../../../../lib/FormContext";
import { Style } from "../../../../../lib/Style";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';

export const StudentSchoolInfo = () => {
    const {
        userOnChange,
        userInfo,
        apiYearLevel
    } = useContext(FormContext);
 console.log("userInfo", userInfo)
    return (
        <div>
            <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    Student ID
                </label>
                <TextField
                    variant="standard"
                    size="small"
                    type="number"
                    value={userInfo.idNumber}
                    onChange={(e) => {
                        userOnChange(e.target.value, "idNumber");
                    }}
                />

            </div>
            <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    RFID Number
                </label>
                <TextField
                    variant="standard"
                    size="small"
                    type="number"
                    value={userInfo.rfidNumber}
                    onChange={(e) => {
                        userOnChange(e.target.value, "rfidNumber");
                    }}
                />

            </div>

            <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    Year Level
                </label>
                <TextField
                    variant="standard"
                    size="small"
                    select
                    value={userInfo.year}
                    onChange={(e) => {
                        userOnChange(e.target.value, "year");
                    }}

                >
                    {(apiYearLevel?.data || []).map((yearLevel: { id: number, year: string }, id: number) => {
                        return (
                            <MenuItem key={id} value={yearLevel.id}>
                                {yearLevel.year}
                            </MenuItem>
                        )
                    })}

                </TextField>

            </div>

            <div className={Style.inputDiv}>
                <input
                    type="checkbox"
                    className={Style.inputType}
                    value={userInfo.isAlumni}
                    onChange={(e) => {
                        userOnChange(e.target.value, "isAlumni");
                    }}
                />
                <label htmlFor="" className={Style.label}>
                    Alumni
                </label>
            </div>
        </div>

    )
}