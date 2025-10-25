import { Style } from "../../../lib/Style";
import TextField from "@mui/material/TextField";

const EmergencyContactInfo = (props: any) => {

  const { formOnChange, form } = props

  return (
    <div>
      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Name
        </label>
        <TextField
          variant="standard"
          size="small"
          type="text"
          value={form.emergencyName}
          onChange={(e) => {
            formOnChange(e.target.value, "emergencyName");
          }}
          helperText="Please enter name."
        />
      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Contact Number
        </label>
        <TextField
          variant="standard"
          size="small"
          type="number"
          value={form.emergencyContactNumber}
          onChange={(e) => {
            formOnChange(e.target.value, "emergencyContactNumber");
          }}
          helperText="Please enter contact number."
        />

      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Email:
        </label>
        <TextField
          variant="standard"
          size="small"
          type="email"
          value={form.emergencyEmail}
          onChange={(e) => {
            formOnChange(e.target.value, "emergencyEmail");
          }}
          helperText="Please enter email."
        />
      </div>

      <div className={Style.inputDiv}>
        <label htmlFor="" className={Style.label}>
          Facebook:
        </label>
        <TextField
          variant="standard"
          size="small"
          type="text"
          value={form.emergencyFacebook}
          onChange={(e) => {
            formOnChange(e.target.value, "emergencyFacebook");
          }}
          helperText="Please enter facebook."
        />
      </div>
    </div>
  );
}

export default EmergencyContactInfo;