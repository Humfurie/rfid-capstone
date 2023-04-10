import { Style } from "../../lib/Style";
import Button from "@mui/material/Button";
import React from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from "next/router";
import Link from "next/link";

const EmployeeHeader = () => {

    const [drop, setDrop] = React.useState<null | HTMLElement>(null);
    const open = Boolean(drop);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setDrop(event.currentTarget);
    };
    const handleClose = () => {
        setDrop(null);
    };
    const router = useRouter();

    return (
        <div className="flex w-full">
            <div className={`${Style.header}`}>
                <div className="flex w-full">
                    <div className="flex w-56">
                        <Button
                            href={"/users/employee"}
                            className="font-bold pl-5 pr-5 text-2xl text-gray-800 hover:bg-gray-200 hover: rounded-lg"
                        >
                            A I S - R F T
                        </Button>
                    </div>
                    <div className="flex w-full">
                        <Button
                            href={"/users/employee/activities"}
                            className="font-bold pl-5 pr-5  text-gray-700 hover:bg-gray-200 hover: rounded-lg"
                        >
                            Your Activities
                        </Button>
                    </div>
                    <div className=" flex justify-end ">
                        <Button
                            className=" text-gray-700 hover:bg-gray-200 hover: rounded-lg"
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Image
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={drop}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                                
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem>
                                <Link
                                href={'/users/employee/profile'}>
                                Profile
                                </Link>
                                
                            </MenuItem>
                            <MenuItem
                                onClick={handleClose}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default EmployeeHeader;