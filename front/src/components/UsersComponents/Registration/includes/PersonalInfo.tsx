import { useContext, useMemo, useState } from "react";
import { FormContext } from "../../../../lib/FormContext";
import { Style } from "../../../../lib/Style";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Button, IconButton } from "@mui/material";
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import { Divider } from "@mantine/core";
import moment from 'moment'
import { grey, yellow } from "@mui/material/colors";

export const PersonalInfo = (props: any) => {
    const {
        userOnChange,
        userInfo,
        imageFile,
        setImageFile,
        setChildren,
        children,
        apiChildren,
        setApiChildren
    } = useContext(FormContext);

    const { parent } = props

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
                    helperText="Please enter first name."
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
                    helperText="Please enter middle name."

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
                    helperText="Please enter lastname."
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
                    value={new Date(userInfo.birthdate).toISOString().substr(0, 10)}
                    onChange={(e: any) => {
                        userOnChange(e.target.value, "birthdate");
                    }}
                    helperText="Please enter birthdate."
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
                    helperText="Please enter gender."

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
                    helperText="Please enter address."
                />
            </div>

            {parent && (<div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    Children
                </label>
                <TextField
                    variant="standard"
                    size="small"
                    select
                    value={children}
                    onChange={(e) => {
                        setChildren(e.target.value)
                    }}
                    helperText="Please enter year level."

                >
                    {(apiChildren?.data || []).map((children: {
                        [x: string]: any; id: number, first_name: string, last_name: string
                    }, id: number) => {
                        return (
                            <MenuItem key={id} value={children.id}>
                                <Avatar
                                    alt={`${children.first_name}`}
                                    src={`${process.env.NEXT_PUBLIC_API_URL + children.profilePic?.url}`}
                                    sx={{ width: 30, height: 30, bgcolor: yellow[100], color: grey[700], border: '1px solid #bdbdbd' }}

                                />
                                {children.first_name}
                                {children.last_name}
                            </MenuItem>
                        )
                    })}

                </TextField>
            </div>)}
        </div>
    )
}