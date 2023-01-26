import { Modal } from "@mantine/core";
import { useContext } from "react";
import { FormContext } from "../../lib/FormContext";
import { InputStyle } from "../../lib/InputStyle";
import MyButton from "../../lib/partials/MyButton";

const StudentRegistration = () => {
  const {
    registration,
    setRegistration,
    studentRegister,
    studentOnChange,
    studentEmergencyOnChange,
    studentAccountOnChange,
  } = useContext(FormContext);

  return (
    <Modal
      opened={registration}
      onClose={() => setRegistration(false)}
      className="w-screen"
      size="70%"
    >
      <h4 className="text-center">Student Registration</h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          studentRegister();
        }}
      >
        <div className="grid lg:grid-cols-5 gap-1  text-center mt-10 mb-2">
          <div>
            <h5 className={InputStyle.registrationNavBar} >Personal Information</h5>
            <div className={InputStyle.reg}>
              <div className="flex justify-center flex-col mt-2">
                <label htmlFor="" className={InputStyle.label}>
                  First Name:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentOnChange(e.target.value, 'firstname')
                  }}
                />
              </div>

              <div className="flex justify-center flex-col mt-2">
                <label htmlFor="" className={InputStyle.label}>
                  Middle Name:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentOnChange(e.target.value, 'middlename')
                  }}
                />
              </div>

              <div className="flex justify-center flex-col mt-1">
                <label htmlFor="" className={InputStyle.label}>
                  Last Name:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentOnChange(e.target.value, 'lastname')
                  }}
                />
              </div>

              <div className="flex justify-center flex-col mt-1">
                <label htmlFor="" className={InputStyle.label}>
                  Birthday:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentOnChange(e.target.value, 'birthday')
                  }}
                />
              </div>

              <div className="flex justify-center flex-col mt-1">
                <label htmlFor="" className={InputStyle.label}>
                  Gender:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentOnChange(e.target.value, 'gender')
                  }}
                />
              </div>

              <div className="flex justify-center flex-col mt-1">
                <label htmlFor="" className={InputStyle.label}>
                  Address:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentOnChange(e.target.value, 'address')
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className={InputStyle.registrationNavBar} >School Information</h5>
            <div className={InputStyle.reg}>
              <div className="flex justify-center flex-col mt-1">
                <label htmlFor="" className={InputStyle.label}>
                  Student ID:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => { studentOnChange(e.target.value, 'studentId') }}
                />
              </div>

              <div className="flex justify-center flex-col mt-2">
                <label htmlFor="" className={InputStyle.label}>
                  School Year:
                </label>
                <select name="" id="" className={InputStyle.inputType} onChange={e => {
                  studentOnChange(e.target.value, 'schoolYear')
                }}>
                  <option selected disabled>
                    ---Select School Year---
                  </option>
                  <option value="Grade 7">Grade 7</option>
                  <option value="Grade 7">Grade 8</option>
                  <option value="Grade 7">Grade 9</option>
                  <option value="Grade 7">Grade 10</option>
                  <option value="Grade 7">Grade 11</option>
                  <option value="Grade 7">Grade 12</option>
                </select>
              </div>
            </div>


          </div>
          <div>
            <h5 className={InputStyle.registrationNavBar} >Contact Information</h5>
            <div className={InputStyle.reg}>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  E-mail:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentOnChange(e.target.value, 'email')
                  }}
                />
              </div>

              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Contact Number:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentOnChange(e.target.value, 'contactNumber')
                  }}
                />
              </div>

              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Facebook:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentOnChange(e.target.value, 'facebook')
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className={InputStyle.registrationNavBar} >Emergency Contact</h5>

            <div className={InputStyle.reg}>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Name:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentEmergencyOnChange(e.target.value, 'name')
                  }}
                />
              </div>

              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Contact Number:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentEmergencyOnChange(e.target.value, 'contactNumber')
                  }}
                />
              </div>

              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Email:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentEmergencyOnChange(e.target.value, 'email')
                  }}
                />
              </div>

              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Facebook:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentEmergencyOnChange(e.target.value, 'facebook')
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <h5 className={InputStyle.registrationNavBar} >Account</h5>
            <div className={InputStyle.reg}>
              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Username:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentAccountOnChange(e.target.value, 'username')
                  }}
                />
              </div>

              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Password:
                </label>
                <input type="text" className={InputStyle.inputType}
                  onChange={e => {
                    studentAccountOnChange(e.target.value, 'password')
                  }}
                />
              </div>

              <div className={InputStyle.inputDiv}>
                <label htmlFor="" className={InputStyle.label}>
                  Confirm Password:
                </label>
                <input type="text" className={InputStyle.inputType} />
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

export default StudentRegistration;
