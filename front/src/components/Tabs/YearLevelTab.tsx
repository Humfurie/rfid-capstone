import { TextField } from '@mui/material';
import { Style } from "../../lib/Style";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import { useContext, useState } from 'react';
import { FormContext } from '../../lib/FormContext';

const YearLevelTab = (props: any) => {
    const { totalPages, currentPage, handleChangePage } = props

    const {
        setYear,
        year,
        yearSubmit
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
                           
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                yearSubmit()
                            }}>
                                <TextField

                                    id="outlined-basic"
                                    label="Add new year level"
                                    variant="standard"
                                    size="small"
                                    type="text"
                                    value={year}
                                    onChange={(e) => {
                                        setYear(e.target.value)
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

export default YearLevelTab;