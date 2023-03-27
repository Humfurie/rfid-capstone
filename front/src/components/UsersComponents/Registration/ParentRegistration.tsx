import { useContext } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import MyButton from "../../../lib/partials/MyButton";

const ParentRegistration = () => {
  const {
    registration,
    setRegistration,
    userOnChange,
    accountOnChange,
    userSubmit,
    roleOnChange
  } = useContext(FormContext);

  return (
    <div>
      <h4 className="text-center">Parent Registration</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setRegistration(false)
          userSubmit();
        }}
      >

        <div className="grid lg:grid-cols-3 gap-1  text-center mt-10 mb-2">
          <div>
            <h5 className={Style.registrationNavBar}>
              Personal Information
            </h5>
            <div className={Style.reg}>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  First Name:
                </label>
                <input
                  type="text"
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "firstname");
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
                  onChange={(e) => {
                    userOnChange(e.target.value, "middlename");
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
                  onChange={(e) => {
                    userOnChange(e.target.value, "lastname");
                  }}
                />
              </div>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Birthday:
                </label>
                <input
                  type="date"
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "birthday");
                  }}
                />
              </div>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Gender:
                </label>
                <select
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "gender");
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
                  onChange={(e) => {
                    userOnChange(e.target.value, "address");
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <h5 className={Style.registrationNavBar}>
              Contact Information
            </h5>
            <div className={Style.reg}>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  E-mail:
                </label>
                <input
                  type="email"
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "email");
                  }}
                />
              </div>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Contact Number:
                </label>
                <input
                  type="number"
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "contactNumber");
                  }}
                />
              </div>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Facebook:
                </label>
                <input
                  type="text"
                  className={Style.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "facebook");
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className={Style.registrationNavBar}>Account</h5>
            <div className={Style.reg}>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Username:
                </label>
                <input
                  type="text"
                  className={Style.inputType}
                  onChange={(e) => {
                    accountOnChange(e.target.value, "username");
                  }}
                />
              </div>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Password:
                </label>
                <input
                  type="password"
                  className={Style.inputType}
                  onChange={(e) => {
                    accountOnChange(e.target.value, "password");
                  }}
                />
              </div>
              <div className={Style.inputDiv}>
                <label htmlFor="" className={Style.label}>
                  Confirm Password:
                </label>
                <input type="password" className={Style.inputType} />
              </div>
            </div>
          </div>
        </div>
        <div className={Style.registerBtn}>
          <MyButton type="submit" label="Register" />
        </div>
      </form>
    </div>
  );
};

export default ParentRegistration;
