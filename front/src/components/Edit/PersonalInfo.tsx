import { useRouter } from "next/router";
import { Style } from "../../lib/Style";
import { useContext } from "react";

const PersonalInfo = (props: any) => {

  const { formOnChange, form } = props

  return (
    <div>
      personal
      <div>
        <div className={Style.inputDiv}>
          <label htmlFor="" className={Style.label}>
            First Name:
          </label>
          <input
            type="text"
            className={Style.inputType}
            value={form.firstName}
            onChange={(e) => {
              formOnChange(e.target.value, "firstName");
            }}
          />
        </div>
        <div className={Style.inputDiv}>
          <label htmlFor="" className={Style.label}>
            Middle Name:
          </label>
          <input
            type="text"
            className={Style.inputType}
            value={form.middleName}
            onChange={(e) => {
              formOnChange(e.target.value, "middleName");
            }}
          />
        </div>

        <div className={Style.inputDiv}>
          <label htmlFor="" className={Style.label}>
            Last Name:
          </label>
          <input
            type="text"
            className={Style.inputType}
            value={form.lastName}
            onChange={(e) => {
              formOnChange(e.target.value, "lastName");
            }}
          />
        </div>

        <div className={Style.inputDiv}>
          <label htmlFor="" className={Style.label}>
            Birthday:
          </label>
          <input
            type="text" // should be date, but cannot get date cause value has other characters
            className={Style.inputType}
            value={form.birthdate}
            onChange={(e) => {
              formOnChange(e.target.value, "birthdate");
            }}
          />
        </div>

        <div className={Style.inputDiv}>
          <label htmlFor="gender" className={Style.label}>
            Gender:
          </label>
          <select
            name=""
            id=""
            className={Style.inputType}
            value={form.gender}
            onChange={(e) => {
              formOnChange(e.target.value, "gender");
            }}
          >
            <option value=''>
              ---Select Gender---
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>

          </select>
        </div>

        <div className={Style.inputDiv}>
          <label htmlFor="" className={Style.label}>
            Address:
          </label>
          <input
            type="text"
            className={Style.inputType}
            value={form.address}
            onChange={(e) => {
              formOnChange(e.target.value, "address");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;