import Button from "@mui/material/Button";
import { Style } from "../../lib/Style";
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import { useState } from "react";
import ScannedPopUp from "../../components/ScannedPopUp";

const Scanner = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={`flex-col ${Style.parentDiv}`}>
            <div className="px-2">
                <Button
                    variant="text"
                    href={'/'}
                    className={`${Style.textColor}`}
                >
                    <SpaceDashboardRoundedIcon />
                    <span className="pl-2" >
                        Dashboard
                    </span>

                </Button>
            </div>
            <div className="mx-auto">
                <div className={`p-72 ${Style.tableBg}`}>
                    <div className={`flex justify-center font-extrabold`}>
                    <Button onClick={handleOpen}>
                            SCAN HERE
                        </Button>
                        <ScannedPopUp open={open} handleClose={handleClose}/>

                    </div>

                </div>
            </div>

        </div>
    );
}

export default Scanner;