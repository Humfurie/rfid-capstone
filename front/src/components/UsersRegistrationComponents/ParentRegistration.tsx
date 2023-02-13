import { Modal } from "@mantine/core";
import { useContext } from "react";
import { FormContext } from "../../lib/FormContext";
import { InputStyle } from "../../lib/InputStyle";
import MyButton from "../../lib/partials/MyButton";

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
    <Modal
      opened={registration}
      onClose={() => setRegistration(false)}
      className="w-screen"
      size="70%"
    >
      <h4 className="text-center">Parent Registration</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          userSubmit();
        }}
      >
        
        <div className="grid lg:grid-cols-3 gap-1  text-center mt-10 mb-2">
          <div>
            <h5 className={InputStyle.registrationNavBar}>
              Personal Information
            </h5>
            <div className={InputStyle.reg}>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  First Name:
                </label>
                <input
                  type="text"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "firstname");
                  }}
                />
              </div>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Middle Name:
                </label>
                <input
                  type="text"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "middlename");
                  }}
                />
              </div>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Last Name:
                </label>
                <input
                  type="text"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "lastname");
                  }}
                />
              </div>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Birthday:
                </label>
                <input
                  type="date"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "birthday");
                  }}
                />
              </div>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Gender:
                </label>
                <select
                  name=""
                  id=""
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "gender");
                  }}
                >
                  <option selected disabled>
                    ---Select Gender---
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Address:
                </label>
                <input
                  type="text"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "address");
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <h5 className={InputStyle.registrationNavBar}>
              Contact Information
            </h5>
            <div className={InputStyle.reg}>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  E-mail:
                </label>
                <input
                  type="email"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "email");
                  }}
                />
              </div>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Contact Number:
                </label>
                <input
                  type="number"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "contactNumber");
                  }}
                />
              </div>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Facebook:
                </label>
                <input
                  type="text"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    userOnChange(e.target.value, "facebook");
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className={InputStyle.registrationNavBar}>Account</h5>
            <div className={InputStyle.reg}>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Username:
                </label>
                <input
                  type="text"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    accountOnChange(e.target.value, "username");
                  }}
                />
              </div>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Password:
                </label>
                <input
                  type="password"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    accountOnChange(e.target.value, "password");
                  }}
                />
              </div>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Confirm Password:
                </label>
                <input type="password" className={InputStyle.inputType} />
              </div>
            </div>
          </div>
        </div>
        <div className={InputStyle.registerBtn}>
          <MyButton type="submit" label="Register" />
        </div>
      </form>
    </Modal>
  );
};

export default ParentRegistration;
