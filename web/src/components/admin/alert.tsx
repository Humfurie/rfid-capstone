import { Alert } from "@mui/material";
import { useContext, useState } from "react";
import { FormContext } from "../lib/FormContext";

const CustomAlert = (props: any) => {
    console.log(props)
    const { message } = props
    const { setAlertOpen } = useContext(FormContext)
    return (
        <div>
            <Alert onClose={() => { setAlertOpen(false) }}>{message}</Alert>
        </div>
    );
}

export default CustomAlert;