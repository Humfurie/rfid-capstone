import Button from "@mui/material/Button";
import { Style } from "../../lib/Style";
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import { useState, useMemo } from "react";
import ScannedPopUp from "../../components/ScannedPopUp";
import useSWR from 'swr'
import axios from "axios";

const Scanner = () => {


    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const fetcher = (url: string) => axios.get(url)
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/rfid/scan`, fetcher, { refreshInterval: 1000 })

    let scanned
    const latestIn = data?.data[0]
    const latestOut = data?.data[1]

    console.log(latestIn, latestOut)

    useMemo(() => {
        if (data) {
            scanned = (
                <div>
                    <div>
                        <div>
                            {latestIn.user.first_name} {latestIn.user.last_name}
                        </div>
                        <div>
                            {latestIn.status}
                        </div>
                    </div>
                    <div>
                        <div>
                            {latestOut.user.first_name} {latestOut.user.last_name}
                        </div>
                        <div>
                            {latestOut.status}
                        </div>
                    </div>
                </div>
            )
        }
    }, [data])

    if (error) return <>...error</>
    if (isLoading) return <>LOADING</>

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
                        {/* {scanned} */}
                        <ScannedPopUp open={open} handleClose={handleClose} scanned={scanned} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Scanner;