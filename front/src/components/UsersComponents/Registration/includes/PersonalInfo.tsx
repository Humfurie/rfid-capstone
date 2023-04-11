import { useContext } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";
import TextField from "@mui/material/TextField";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const PersonalInfo = () => {
    const {
        userOnChange,
        userInfo

    } = useContext(FormContext);
    const gender = [
        {
            value: 'Male',
            label: 'Male'
        },
        {
            value: 'Female',
            label: 'Female'
        }
    ]
    return (
        <div>
            <div >
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        First Name
                    </label>

                    <TextField

                        id="outlined-basic"
                        variant="filled"
                        size="small"
                        type="text"
                        value={userInfo.firstName}
                        onChange={(e) => {
                            userOnChange(e.target.value, "firstName");
                        }}
                        required
                    />

                </div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Middle Name
                    </label>

                    <TextField

                        id="outlined-basic"
                        variant="filled"
                        size="small"
                        type="text"
                        value={userInfo.middleName}
                        onChange={(e) => {
                            userOnChange(e.target.value, "middleName");
                        }}
                    />

                </div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Last Name
                    </label>

                    <TextField

                        id="outlined-basic"
                        variant="filled"
                        size="small"
                        type="text"
                        value={userInfo.lastName}
                        onChange={(e) => {
                            userOnChange(e.target.value, "lastName");
                        }}
                    />

                </div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Birthday
                    </label>

                    <TextField

                        id="outlined-basic"
                        variant="filled"
                        size="small"
                        type="date"
                        value={userInfo.birthdate}
                        onChange={(e) => {
                            userOnChange(e.target.value, "birthdate");
                        }}
                    />


                </div>

                <div className={Style.inputDiv}>

                    <label htmlFor="" className={Style.label}>
                        Gender
                    </label>

                    <TextField

                        id="outlined-basic"

                        variant="filled"
                        size="small"
                        select
                        value={userInfo.gender}
                        onChange={(e) => {
                            userOnChange(e.target.value, "gender");
                        }}

                    >
                        {gender.map((option) => (
                            
                            <MenuItem key={option.value} value={option.value}> 
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    
                    
                </div>
                <div className={Style.inputDiv}>
                    <label htmlFor="" className={Style.label}>
                        Address
                    </label>
                    <TextField
                        variant="filled"
                        size="small"
                        type="text"
                        value={userInfo.address}
                        onChange={(e) => {
                            userOnChange(e.target.value, "address");
                        }}
                    />

                </div>
            </div>
        </div>
    )
}