import Button from "@mui/material/Button";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react";

const Tabs = () => {
    const [drop, setDrop] = React.useState<null | HTMLElement>(null);
    const open = Boolean(drop);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setDrop(event.currentTarget);
    };
    const handleClose = () => {
        setDrop(null);
    };
    return (
        <div>
            <div className="flex pt-5 pr-20 pl-20 ">
                <Button>
                    Search
                </Button>
                <Button>
                    Export
                </Button>
                <Button
                    className=" text-gray-700 hover:bg-gray-200 hover: rounded-lg"
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Filter By
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
                        Today

                    </MenuItem>
                    <MenuItem>
                        Last Month
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

export default Tabs;