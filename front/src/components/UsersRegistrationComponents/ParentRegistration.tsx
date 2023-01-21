import { Modal } from "@mantine/core";
import { useContext } from "react";
import { FormContext } from "../../lib/FormContext";
import { InputStyle } from "../../lib/InputStyle";
import MyButton from "../../lib/partials/MyButton";

const ParentRegistration = () => {
  const {
    registration,
    setRegistration,
    parentRegister,
    parentOnChange,
    parentAccountOnChange,
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
          parentRegister();
        }}
      >
         <div className="grid grid-cols-2 m-1" >
            <div className="m-1">
                <div>
                    <div>
                        <div className={InputStyle.inCaseOfEmergency}>
                            <h5 >Personal Information</h5>
                        </div>
                    </div>
                    <div>
                        <div className={InputStyle.inputDiv}>
                            <label htmlFor="" className={InputStyle.label}>First Name:</label>
                            <input type="text" className={InputStyle.inputType} 
                            onChange={ e => {
                              parentOnChange(e.target.value, 'firstname')
                            }}
                            />
                        </div>
                        <div className={InputStyle.inputDiv}>
                            <label htmlFor="" className={InputStyle.label}>Middle Name:</label>
                            <input type="text" className={InputStyle.inputType}
                            onChange={ e => {
                              parentOnChange(e.target.value, 'middlename')
                            }}
                            />
                        </div>
                        <div className={InputStyle.inputDiv}>
                            <label htmlFor="" className={InputStyle.label}>Last Name:</label>
                            <input type="text" className={InputStyle.inputType}
                            onChange={ e => {
                              parentOnChange(e.target.value, 'lastname')
                            }}
                            />
                        </div>
                        <div className={InputStyle.inputDiv}>
                            <label htmlFor="" className={InputStyle.label}>Address:</label>
                            <input type="text" className={InputStyle.inputType}
                            onChange={ e => {
                              parentOnChange(e.target.value, 'address')
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-1">
                <div>
                    <div className={InputStyle.inCaseOfEmergency}>
                        <h5 >Contact Information</h5>
                    </div>
                    <div>
                        <div className={InputStyle.inputDiv}>
                            <label htmlFor="" className={InputStyle.label}>E-mail:</label>
                            <input type="text" className={InputStyle.inputType}
                            onChange={ e => {
                              parentOnChange(e.target.value, 'email')
                            }}
                            />
                        </div>
                        <div className={InputStyle.inputDiv}>
                            <label htmlFor="" className={InputStyle.label}>Contact Number:</label>
                            <input type="text" className={InputStyle.inputType}
                            onChange={ e => {
                              parentOnChange(e.target.value, 'contactNumber')
                            }}
                            />
                        </div>
                        <div className={InputStyle.inputDiv}>
                            <label htmlFor="" className={InputStyle.label}>Facebook:</label>
                            <input type="text" className={InputStyle.inputType}
                            onChange={ e => {
                              parentOnChange(e.target.value, 'facebook')
                            }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className={InputStyle.inCaseOfEmergency}>
                <h5 >Account</h5>
            </div>
            <div>
                <div className={InputStyle.inputDiv}>
                    <label htmlFor="" className={InputStyle.label}>Username:</label>
                    <input type="text" className={InputStyle.inputType}
                    onChange={ e => {
                      parentAccountOnChange(e.target.value, 'username')
                    }}
                    />

                </div>
                <div className={InputStyle.inputDiv}>
                    <label htmlFor="" className={InputStyle.label}>Password:</label>
                    <input type="text" className={InputStyle.inputType}
                    onChange={ e => {
                      parentAccountOnChange(e.target.value, 'password')
                    }}
                    />
                </div>
                <div className={InputStyle.inputDiv}>
                    <label htmlFor="" className={InputStyle.label}>Confirm Password:</label>
                    <input type="text" className={InputStyle.inputType} />
                </div>
            </div>
        </div>
        <div className={InputStyle.registerBtn}>
            <MyButton type='submit' label="Register" />
        </div>
      </form>
    </Modal>
  );
};

export default ParentRegistration;
