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
        />
      </div>
    </div>
  );
}

export default EmergencyContactInfo;