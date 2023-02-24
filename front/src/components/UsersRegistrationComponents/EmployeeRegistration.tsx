
import { useContext } from "react";
import { FormContext } from "../../lib/FormContext";
import { InputStyle } from "../../lib/InputStyle";
import MyButton from "../../lib/partials/MyButton";

const EmployeeRegistration = () => {
  const {
    registration,
    setRegistration,
    userSubmit,
    userOnChange,
    setPosition,
    emergencyOnChange,
    accountOnChange,
    setRole,
    apiPosition
  } = useContext(FormContext);

  return (
    <div>


      <h3 className="text-center">Employee Registration</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setRegistration(false)
          userSubmit();
        }}
      >
        {setRole('employee')}

        <div className="grid lg:grid-cols-4 gap-1  text-center mt-10 mb-2">
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
                    userOnChange(e.target.value, "firstName");
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
                    userOnChange(e.target.value, "middleName");
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
                    userOnChange(e.target.value, "lastName");
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
                    userOnChange(e.target.value, "birthdate");
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
                  <option value=''>
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
              School Information
            </h5>
            <div className={InputStyle.reg}>
              <div className="flex justify-center flex-col mt-2">
                <label htmlFor="" className={InputStyle.label}>
                  Position:
                </label>
                <select
                  name="positions"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    setPosition(e.target.value);
                  }}
                >
                  <option value=''>
                    ---Select Position---
                  </option>
                  {apiPosition.map((element: { id: number, position: string }, id: number) => (
                    <>
                      <option key={id} value={element.id}>{element.position}</option>
                    </>
                  ))}

                </select>
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
            <h5 className={InputStyle.registrationNavBar}>
              Emergency Contact
            </h5>

            <div className={InputStyle.reg}>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Name:
                </label>
                <input
                  type="text"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    emergencyOnChange(e.target.value, "name");
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
                    emergencyOnChange(e.target.value, "contactNumber");
                  }}
                />
              </div>

              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Email:
                </label>
                <input
                  type="email"
                  className={InputStyle.inputType}
                  onChange={(e) => {
                    emergencyOnChange(e.target.value, "email");
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
                    emergencyOnChange(e.target.value, "facebook");
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <h5 className={InputStyle.registrationNavBar}>Account</h5>

            <div className={InputStyle.reg}>
              <div>
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
        </div>

        <div className={InputStyle.registerBtn}>
          <MyButton type="submit" label="Register" />
        </div>
      </form>
    </div>
  );
};

export default EmployeeRegistration;
