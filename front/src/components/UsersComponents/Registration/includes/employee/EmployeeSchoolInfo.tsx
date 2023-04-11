import { useContext } from "react";
import { FormContext } from "../../../../../lib/FormContext";
import { Style } from "../../../../../lib/Style";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';

export const EmployeeSchoolInfo = () => {
    const {
        setPosition,
        apiPosition,
        position,
        userInfo,
        userOnChange
    } = useContext(FormContext);

    
    return (

        <div>
            <div >
                <div className="flex justify-center flex-col mt-2">
                    <label htmlFor="" className={Style.label}>
                        Employee ID:
                    </label>
                    <TextField
                        variant="filled"
                        size="small"
                        type="number"
                        value={userInfo.idNumber}
                        onChange={(e) => {
                            userOnChange(e.target.value, "idNumber")
                        }}

                    />


                    <label htmlFor="" className={Style.label}>
                        RFID Number:
                    </label>

                    <TextField
                        variant="filled"
                        size="small"
                        type="number"
                        value={userInfo.rfidNumber}
                        onChange={(e) => {
                            userOnChange(e.target.value, "rfidNumber")
                        }}

                    />


                    <label htmlFor="" className={Style.label}>
                        Position:
                    </label>

                    <TextField

                        id="outlined-basic"
                        variant="filled"
                        size="small"
                         select
                        value={position}
                        onChange={(e) => {
                            setPosition(e.target.value);
                        }}

                    >
                    {(apiPosition?.data || []).map((element: { id: number, position: string }, id: number) => {
                        // console.log(element.position)
                        return (
                                <MenuItem key={id} value={element.id}>
                                    {element.position}
                                </MenuItem>
                        )
                    })}

                    </TextField>


                </div>
            </div>
        </div>

    )
}