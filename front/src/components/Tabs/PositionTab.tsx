import { ButtonGroup, TextField } from '@mui/material';
import { Style } from "../../lib/Style";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import { useContext, useState } from 'react';
import { FormContext } from '../../lib/FormContext';

const PositionTab = (props: any) => {
    const { totalPages, currentPage, handleChangePage } = props



    const {
        positionSubmit,
        setPosition,
        position,
    } = useContext(FormContext)

    return (
        <div className={`flex-col ${Style.parentDiv}`}>
            <div className={`pt-3`}>
                <div className={`${Style.menuTab}`}>

                    <div className={`flex`}>
                        <div className={`pl-50`}>
                            <Pagination
                                count={totalPages}
                                page={currentPage}
                                onChange={handleChangePage}
                                variant="text"
                            />
                        </div>

                        <div className={`flex justify-end`}>
                            <Divider
                                flexItem
                                orientation="vertical"
                            />
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                positionSubmit()
                            }}>
                                <TextField

                                    id="outlined-basic"
                                    label="Add new position"
                                    variant="filled"
                                    size="small"
                                    type="text"
                                    value={position}
                                    onChange={(e) => {
                                        setPosition(e.target.value)
                                    }}
                                    required
                                />
                                <Button
                                    type="submit"
                                    className={`${Style.textColor}`}>
                                    Add New
                                </Button>

                            </form>
                            <Divider
                                flexItem
                                orientation="vertical"
                            />
                            <Button
                                className={`${Style.textColor}`}
                            >
                                Search
                            </Button>
                            <Divider
                                flexItem
                                orientation="vertical"
                            />


                            <Button
                                href={""}
                                className={`${Style.textColor}`}>
                                Export
                            </Button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default PositionTab;