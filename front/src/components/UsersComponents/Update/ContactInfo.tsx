import { Style } from "../../../lib/Style";
import TextField from "@mui/material/TextField";

const ContactInfo = (props: any) => {

    const { formOnChange, form } = props
    return (
        <div>
            <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    E-mail
                </label>
                <TextField
                    variant="standard"
                    size="small"
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                        formOnChange(e.target.value, "email");
                    }}
                    helperText="Please enter email."
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
                    value={form.contactNumber}
                    onChange={(e) => {
                        formOnChange(e.target.value, "contactNumber");
                    }}
                    helperText="Please enter contact number."
                />
            </div>

            <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    Facebook
                </label>
                <TextField
                    variant="standard"
                    size="small"
                    type="text"
                    value={form.facebook}
                    onChange={(e) => {
                        formOnChange(e.target.value, "facebook");
                    }}
                    helperText="Please enter facebook."
                />
            </div>
        </div>
    );
}

export default ContactInfo;