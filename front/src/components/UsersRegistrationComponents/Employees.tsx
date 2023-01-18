import { InputStyle } from "../../lib/InputStyle";
import MyButton from "../../lib/partials/MyButton";

const Employees = () => {
    return (
        <>
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
                                <input type="text" className={InputStyle.inputType} />
                            </div>
                            <div className={InputStyle.inputDiv}>
                                <label htmlFor="" className={InputStyle.label}>Middle Name:</label>
                                <input type="text" className={InputStyle.inputType} />
                            </div>
                            <div className={InputStyle.inputDiv}>
                                <label htmlFor="" className={InputStyle.label}>Last Name:</label>
                                <input type="text" className={InputStyle.inputType} />
                            </div>
                            <div className={InputStyle.inputDiv}>
                                <label htmlFor="" className={InputStyle.label}>Address:</label>
                                <input type="text" className={InputStyle.inputType} />
                            </div>
                        </div>
                        <div className="mt-2.5">
                            <div className={InputStyle.inCaseOfEmergency}>
                                <h5 >In Case of Emergency</h5>
                            </div>
                            <div >
                                <div className={InputStyle.inputDiv}>
                                    <label htmlFor="" className={InputStyle.label}>Name:</label>
                                    <input type="text" className={InputStyle.inputType} />
                                </div>
                                <div className={InputStyle.inputDiv}>
                                    <label htmlFor="" className={InputStyle.label}>Contact Number:</label>
                                    <input type="text" className={InputStyle.inputType} />
                                </div>
                                <div className={InputStyle.inputDiv}>
                                    <label htmlFor="" className={InputStyle.label}>Facebook:</label>
                                    <input type="text" className={InputStyle.inputType} />
                                </div>
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
                                <input type="text" className={InputStyle.inputType} />
                            </div>
                            <div className={InputStyle.inputDiv}>
                                <label htmlFor="" className={InputStyle.label}>Contact Number:</label>
                                <input type="text" className={InputStyle.inputType} />
                            </div>
                            <div className={InputStyle.inputDiv}>
                                <label htmlFor="" className={InputStyle.label}>Facebook:</label>
                                <input type="text" className={InputStyle.inputType} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-14">
                        <div className={InputStyle.inCaseOfEmergency}>
                            <h5 >Account</h5>
                        </div>
                        <div>
                            <div className={InputStyle.inputDiv}>
                                <label htmlFor="" className={InputStyle.label}>Username:</label>
                                <input type="text" className={InputStyle.inputType} />

                            </div>
                            <div className={InputStyle.inputDiv}>
                                <label htmlFor="" className={InputStyle.label}>Password:</label>
                                <input type="text" className={InputStyle.inputType} />
                            </div>
                            <div className={InputStyle.inputDiv}>
                                <label htmlFor="" className={InputStyle.label}>Confirm Password:</label>
                                <input type="text" className={InputStyle.inputType} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={InputStyle.registerBtn}>
                <MyButton type='submit' label="Register" />
            </div>
        </>
    );
}

export default Employees;