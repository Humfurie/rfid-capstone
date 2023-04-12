import { Backdrop, Button, CircularProgress } from "@mui/material";
import { useState } from "react";

const ScannedPopUp = (props: any) => {
    const { open, handleClose } = props

    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <div className={`grid grid-rows-3 text-center`}>

                
                <div >
                    Image
                </div>
                <div>
                    Name
                </div>
                <div>
                    Status in or out
                </div>
                </div>

            </Backdrop>
        </div>
    );
}

export default ScannedPopUp;