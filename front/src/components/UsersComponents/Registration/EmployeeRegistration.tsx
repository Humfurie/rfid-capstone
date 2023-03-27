
import { useRouter } from "next/router";
import { useContext } from "react";
import { FormContext } from "../../../lib/FormContext";
import { Style } from "../../../lib/Style";
import MyButton from "../../../lib/partials/MyButton";

const EmployeeRegistration = () => {
  const router = useRouter()
  const {
    userRegistration,
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
    <div className="w-full">
      <div className="w-full bg-white rounded-2xl shadow-lg p-2">



        <div className="text-center">Employee Registration</div>
        <form
          onSubmit={(e) => {
            setRole("employee")
            e.preventDefault();
            setRegistration(false)
            userSubmit();
            router.push("/users/employee")
          }}
        >
          { }
          <div className="grid grid-cols-5 gap-1">
            <div className={Style.registrationNavBar}>
              Personal Information
            </div>
            <div className={Style.registrationNavBar}>
              School Information
            </div>
            <div className={Style.registrationNavBar}>
              Contact Information
            </div>
            <div className={Style.registrationNavBar}>
              Emergency Contact
            </div>
            <div className={Style.registrationNavBar}>
              Account
            </div>

          </div>
          <div>
            <div>
              <div className={Style.registrationNavBar}>
                Personal Information
              </div>
              <div className={Style.reg}>
                <div className={Style.inputDiv}>
                  <label htmlFor="" className={Style.label}>
                    First Name:
                  </label>
                  <input
                    type="text"
                    value={userRegistration.firstName}
                    className={Style.inputType}
                    onChange={(e) => {
                      userOnChange(e.target.value, "firstName");
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
                      userOnChange(e.target.value, "middleName");
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
                      userOnChange(e.target.value, "lastName");
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
                      userOnChange(e.target.value, "birthdate");
                    }}
                  />
                </div>

                <div className={Style.inputDiv}>
                  <label htmlFor="" className={Style.label}>
                    Gender:
                  </label>
                  <select
                    name=""
                    id=""
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
                School Information
              </h5>
              <div className={Style.reg}>
                <div className="flex justify-center flex-col mt-2">
                  <label htmlFor="" className={Style.label}>
                    Position:
                  </label>
                  <select
                    name="positions"
                    className={Style.inputType}
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
              <h5 className={Style.registrationNavBar}>
                Emergency Contact
              </h5>

              <div className={Style.reg}>
                <div className={Style.inputDiv}>
                  <label htmlFor="" className={Style.label}>
                    Name:
                  </label>
                  <input
                    type="text"
                    className={Style.inputType}
                    onChange={(e) => {
                      emergencyOnChange(e.target.value, "name");
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
                      emergencyOnChange(e.target.value, "contactNumber");
                    }}
                  />
                </div>

                <div className={Style.inputDiv}>
                  <label htmlFor="" className={Style.label}>
                    Email:
                  </label>
                  <input
                    type="email"
                    className={Style.inputType}
                    onChange={(e) => {
                      emergencyOnChange(e.target.value, "email");
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
                      emergencyOnChange(e.target.value, "facebook");
                    }}
                  />
                </div>
              </div>
            </div>

            <div>
              <h5 className={Style.registrationNavBar}>Account</h5>

              <div className={Style.reg}>
                <div>
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
          </div>


        </form>
      </div>
    </div>
  );
};

export default EmployeeRegistration;
