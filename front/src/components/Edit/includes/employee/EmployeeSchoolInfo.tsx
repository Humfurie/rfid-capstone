import TextField from "@mui/material/TextField";
import { Style } from "../../../../lib/Style";
import { MenuItem } from "@mui/material";

const EmployeeSchoolInfo = (props: any) => {

  const { formOnChange, form, apiPosition } = props

  return (
    <div>
      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Employee ID:
        </label>
        <TextField
          variant="filled"
          size="small"
          type="number"
          value={form.idNumber}
          onChange={(e) => {
            formOnChange(e.target.value, "idNumber")
          }}
        />
      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          RFID Number:
        </label>
        <TextField
          variant="filled"
          size="small"
          type="number"
          value={form.rfidNumber}
          onChange={(e) => {
            formOnChange(e.target.value, "rfidNumber")
          }}
        />
      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Position:
        </label>

        <TextField
          variant="filled"
          size="small"
          select
          value={form.position}
          onChange={(e) => {
            formOnChange(e.target.value, 'position');
          }}
        >
          {(apiPosition?.data || []).map((element: { id: number, position: string }, id: number) => {
            return (
              <MenuItem key={id} value={element.id}>{element.position}</MenuItem>
            )
          })}
        </TextField>
      </div>
    </div>
  );
}

export default EmployeeSchoolInfo;