import { TextField } from "@mui/material";
import { Style } from "../../lib/Style";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import * as XLSX from 'xlsx'

const StudentTab = (props: any) => {
    const { totalPages, currentPage, handleChangePage, searchUser, handleSearch, users } = props

    function exportToExcel(data: any) {
        const workbook = XLSX.utils.book_new();
        const worksheet = XLSX.utils.json_to_sheet(data)
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
        XLSX.writeFile(workbook, `parent/${Date.now()}.xlsx`);
    }

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
                            <TextField
                                variant="standard"
                                className={`${Style.textColor}`}
                                value={searchUser}
                                onChange={handleSearch}
                                placeholder="Search"
                            />
                            <Divider
                                flexItem
                                orientation="vertical"
                            />
                            <Button
                                href={"/users/registration/parent"}
                                className={`${Style.textColor}`}>
                                Add New
                            </Button>
                            <Divider
                                flexItem
                                orientation="vertical"
                            />

                            <Button
                                href={""}
                                className={`${Style.textColor}`}
                                onClick={e => exportToExcel(users)}>
                                Export
                            </Button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentTab;