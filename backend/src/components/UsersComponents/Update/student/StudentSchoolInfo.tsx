import { Style } from "../../../../lib/Style";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
const StudentSchoolInfo = (props: any) => {

  const { formOnChange, form, apiYearLevel } = props

  return (
    <div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Student ID:
        </label>
        <TextField
          variant="standard"
          size="small"
          type="number"
          value={form.idNumber}
          onChange={(e) => {
            formOnChange(e.target.value, "idNumber");
          }}
        />
      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          RFID Number
        </label>
        <TextField
          variant="standard"
          size="small"
          type="number"
          value={form.rfidNumber}
          onChange={(e) => {
            formOnChange(e.target.value, "rfidNumber");
          }}
        />

      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Year Level
        </label>


        <TextField
          variant="standard"
          size="small"
          select
          value={form.yearLevel}
          onChange={(e) => {
            formOnChange(e.target.value, 'yearLevel');
          }}
        >
          {(apiYearLevel?.data || []).map((yearLevel: { id: number, year: string }, id: number) => {
            return (
              <MenuItem key={id} value={yearLevel.id}>
                {yearLevel.year}
              </MenuItem>
            )
          })}

        </TextField>
      </div>

      <div >
        <FormControl>
          <FormControlLabel
            className={Style.label}
            label="Alumni"

            control={
              <Switch
                checked={form.isAlumni}
                inputProps={{ 'aria-label': 'controlled' }}
                // value={form.isAlumni}
                onChange={(e) => {
                  formOnChange(e.target.checked, "isAlumni");
                }}

              />
            }
          />


        </FormControl>


      </div>

    </div>
  );
}

export default StudentSchoolInfo;