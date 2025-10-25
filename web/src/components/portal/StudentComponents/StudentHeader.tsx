import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from "next/link";
import { useRouter } from "next/router";
import { Style } from "../../lib/Style";
import { destroyCookie, parseCookies } from "nookies";
import Avatar from "@mui/material/Avatar";
import { FormContext } from "../../lib/FormContext";
import { grey, yellow } from "@mui/material/colors";


const StudentHeader = (props : any) => {
    const {
        data
    } = useContext(FormContext)

    const [drop, setDrop] = React.useState<null | HTMLElement>(null);
    const open = Boolean(drop);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setDrop(event.currentTarget);
    };
    const handleClose = () => {
        setDrop(null);
    };

    const destroyCookie = (cookieName: any) => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };

    console.log(data?.data)

    const router = useRouter();

    return (
        <div className="flex w-full">
            <div className={`${Style.header}`}>
                <div className="flex w-full">
                    <div className="flex w-56">
                        <Button
                            href={"/users/student"}
                            className="font-bold pl-5 pr-5 text-2xl text-gray-800 hover:bg-gray-200 hover: rounded-lg"
                        >
                            A I S - R F T
                        </Button>
                    </div>
                    <div className="flex w-full justify-end ">
                        <Button
                            className=" text-gray-700 hover:bg-gray-200 hover: rounded-lg"
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                           <Avatar alt={`${data?.data.first_name} `} src={`${process.env.NEXT_PUBLIC_API_URL + data?.data.profilePic?.url}`} sx={{ bgcolor: yellow[50], color: grey[50] }} />
                        </Button>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={drop}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',

                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem>
                                <Link
                                    href={'/users/student/profile'}>
                                    Profile
                                </Link>

                            </MenuItem>
                            <MenuItem
                                onClick={e => {
                                    handleClose
                                    destroyCookie('Student')
                                    router.push('/login')
                                }}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default StudentHeader;