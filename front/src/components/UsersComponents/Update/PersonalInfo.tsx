import { Style } from "../../../lib/Style";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';

const genders = [
  {
    value: 'male',
    label: 'Male'
  },
  {
    value: 'female',
    label: 'Female'
  }
]

const PersonalInfo = (props: any) => {

  const { formOnChange, form } = props

  return (
    <div>
      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          First Name:
        </label>

        <TextField
          variant="standard"
          size="small"
          type="text"
          value={form.firstName}
          onChange={(e) => {
            formOnChange(e.target.value, "firstName");
          }}
          helperText="Please enter fist name."
          required
        />
      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Middle Name:
        </label>

        <TextField
          variant="standard"
          size="small"
          type="text"
          value={form.middleName}
          onChange={(e) => {
            formOnChange(e.target.value, "middleName");
          }}
          helperText="Please enter middle name."

        />

      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Last Name:
        </label>

        <TextField
          variant="standard"
          size="small"
          type="text"
          value={form.lastName}
          onChange={(e) => {
            formOnChange(e.target.value, "lastName");
          }}
          helperText="Please enter last name."
          required
        />
      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Birthday:
        </label>

        <TextField
          variant="standard"
          size="small"
          type="date"
          value={form.birthdate}
          onChange={(e) => {
            formOnChange(e.target.value, "birthdate");
          }}
          helperText="Please enter birthday."
          required
        />
      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="gender" className={Style.label}>
          Gender:
        </label>

        <TextField
          variant="standard"
          size="small"
          select
          value={form.gender}
          onChange={(e) => {
            formOnChange(e.target.value, "gender");
          }}
          helperText="Please enter gender."
        >
          {genders.map((option) => (

            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}

        </TextField>
      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Address:
        </label>

        <TextField
          variant="standard"
          size="small"
          type="text"
          value={form.address}
          onChange={(e) => {
            formOnChange(e.target.value, "address");
          }}
          helperText="Please enter address."
          required
        />
      </div>
    </div>
  );
}

export default PersonalInfo;