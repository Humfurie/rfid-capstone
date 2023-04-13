import { useContext, useMemo, useState } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import { Button, IconButton } from "@mui/material";
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import { Divider } from "@mantine/core";

export const PersonalInfo = () => {
    const {
        userOnChange,
        userInfo,
        imageFile,
        setImageFile
    } = useContext(FormContext);

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        setImageFile(file);
    }

    const gender = [
        {
            value: 'male',
            label: 'Male'
        },
        {
            value: 'female',
            label: 'Female'
        }
    ]

    return (
        <div>
            <div className={Style.inputDiv}>
                <div>
                    <label htmlFor="" className={Style.label}>
                        Profile Picture
                    </label>

                    {/* {profilePic} */}
                    <div>
                        {imageFile ? (
                            <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="label"
                            >

                                <img
                                    className="preview-image"
                                    src={URL.createObjectURL(imageFile)}
                                    alt="Profile Picture"
                                    width={100}
                                    height={100}
                                />
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    id="profile-picture"
                                    onChange={handleImageChange}

                                />
                            </IconButton>

                        ) : (
                            <div className="upload-placeholder">
                                <IconButton
                                    color="primary"
                                    aria-label="upload picture"
                                    component="label"
                                >
                                    <input
                                        hidden
                                        accept="image/*"
                                        type="file"
                                        id="profile-picture"
                                        onChange={handleImageChange}

                                    />
                                    <CameraAltRoundedIcon fontSize="large" />
                                </IconButton>
                            </div>
                        )}
                    </div>

                </div>
                {/* <Divider/> */}
            </div>
            <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    First Name
                </label>

                <TextField
                    variant="standard"
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
                    variant="standard"
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
                    variant="standard"
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
                    variant="standard"
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
                    variant="standard"
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
                    variant="standard"
                    size="small"
                    type="text"
                    value={userInfo.address}
                    onChange={(e) => {
                        userOnChange(e.target.value, "address");
                    }}
                />

            </div>
        </div>
    )
}