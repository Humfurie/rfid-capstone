import Button from "@mui/material/Button";
import { Style } from "../../lib/Style";
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import { useState, useMemo, useEffect } from "react";
import ScannedPopUp from "../../components/ScannedPopUp";
import useSWR from 'swr'
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import { grey, yellow } from "@mui/material/colors";

const Scanner = () => {


    const fetcher = (url: string) => axios.get(url)
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/rfid/scan`, fetcher, { refreshInterval: 1000 })

    const latestIn = data?.data[0]
    const latestOut = data?.data[1]

    console.log(latestIn, latestOut)
    // console.log(showData)
    console.log(error)
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
            <div className="flex">
                <div className="mx-auto">
                    <div className={`${Style.tableBg}`}>
                        <div className={`flex justify-center font-extrabold`}>
                            <div className="flex p-20">
                                <div className="mx-auto pt-3 bg">
                                    <Avatar
                                        alt={`${latestIn.user.first_name}`}
                                        src={`${process.env.NEXT_PUBLIC_API_URL + latestIn.user.profilePic?.url}`}
                                        sx={{ width: 300, height: 300, bgcolor: yellow[100], color: grey[700], border: '1px solid #bdbdbd' }}
                                    />
                                </div>
                                <div>
                                    <div className={`${Style.viewName}`}>
                                        {latestIn.user.first_name} {latestIn.user.last_name}
                                    </div>

                                    <div className={`${Style.viewName}`}>
                                        {latestIn.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <div className={`${Style.tableBg}`}>
                        <div className={`flex justify-center font-extrabold`}>
                            <div className="flex p-20">

                                <div className="mx-auto pt-3 bg">
                                    <Avatar
                                        alt={`${latestOut.user.first_name}`}
                                        src={`${process.env.NEXT_PUBLIC_API_URL + latestOut.user.profilePic?.url}`}
                                        sx={{ width: 300, height: 300, bgcolor: yellow[100], color: grey[700], border: '1px solid #bdbdbd' }}

                                    />
                                </div>
                                <div>
                                    <div className={`${Style.viewName}`}>
                                        {latestOut.user.first_name} {latestOut.user.last_name}
                                    </div>

                                    <div className={`${Style.viewName}`}>
                                        {latestOut.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Scanner;