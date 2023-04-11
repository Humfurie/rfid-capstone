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
    return (
        <div>

            <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    Student ID
                </label>
                <TextField
                    variant="filled"
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
                    variant="filled"
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
                    School Year:
                </label>
                <TextField

                    id="outlined-basic"
                    variant="filled"
                    size="small"
                    select
                    value={userInfo.schoolYear}
                    onChange={(e) => {
                        userOnChange(e.target.value, "schoolYear");
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

    )
}