import { Style } from "../../../lib/Style";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import moment from "moment"
import { useContext } from "react";
import { FormContext } from "../../../lib/FormContext";
import Avatar from "@mui/material/Avatar";
import { grey, yellow } from "@mui/material/colors";

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

  const {
    
    setChildren,
    children,
    apiChildren,
    setApiChildren
} = useContext(FormContext);

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
          defaultValue={moment(form.birthdate, 'MM/DD/YYYY').format('YYYY-MM-DD')}
          onChange={(e: any) => {
            formOnChange(moment(e).format('L'), "birthdate");
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
      <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                    Children
                </label>
                <TextField
                    variant="standard"
                    size="small"
                    select
                    value={children}
                    onChange={(e) => {
                        setChildren(e.target.value)
                    }}
                    helperText="Please enter year level."

                >
                    {(apiChildren?.data || []).map((children: {
                        [x: string]: any; id: number, first_name: string, last_name: string
                    }, id: number) => {
                        return (
                            <MenuItem key={id} value={children.id}>
                                <Avatar
                                    alt={`${children.first_name}`}
                                    src={`${process.env.NEXT_PUBLIC_API_URL + children.profilePic?.url}`}
                                    sx={{ width:30, height: 30, bgcolor: yellow[100], color: grey[700], border: '1px solid #bdbdbd' }}

                                />
                                {children.first_name}
                                {children.last_name}
                            </MenuItem>
                        )
                    })}

                </TextField>
            </div>
    </div>
  );
}

export default PersonalInfo;