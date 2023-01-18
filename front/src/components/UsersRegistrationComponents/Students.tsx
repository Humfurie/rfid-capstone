import { InputStyle } from "../../lib/InputStyle";
import MyButton from "../../lib/partials/MyButton";

const Students = () => {
    return (
        <>
        <div className="grid grid-cols-2 m-1" >
            <div className="m-1" >
                <div>
                    <div>
                        <div className={InputStyle.inCaseOfEmergency}>
                            <h5 >Personal Information</h5>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-center flex-col mt-1">
                            <label htmlFor="" className={InputStyle.label}>Student ID:</label>
                            <input type="text" className={InputStyle.inputType} />
                        </div>
                        <div className="flex justify-center flex-col mt-2">
                            <label htmlFor="" className={InputStyle.label}>School Year:</label>
                            <select name="" id="" className={InputStyle.inputType}>
                                <option selected disabled>---Select School Year---</option>
                                <option value="Grade 7">Grade 7</option>
                                <option value="Grade 7">Grade 8</option>
                                <option value="Grade 7">Grade 9</option>
                                <option value="Grade 7">Grade 10</option>
                                <option value="Grade 7">Grade 11</option>
                                <option value="Grade 7">Grade 12</option>
                            </select>
                        </div>
                        <div className="flex justify-center flex-col mt-2">
                            <label htmlFor="" className={InputStyle.label}>First Name:</label>
                            <input type="text" className={InputStyle.inputType} />
                        </div>
                        <div className="flex justify-center flex-col mt-2">
                            <label htmlFor="" className={InputStyle.label}>Middle Name:</label>
                            <input type="text" className={InputStyle.inputType} />
                        </div>
                        <div className="flex justify-center flex-col mt-1">
                            <label htmlFor="" className={InputStyle.label}>Last Name:</label>
                            <input type="text" className={InputStyle.inputType} />
                        </div>
                        <div className="flex justify-center flex-col mt-1">
                            <label htmlFor="" className={InputStyle.label}>Address:</label>
                            <input type="text" className={InputStyle.inputType} />
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
                <div>
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
        <div className="mt-4">
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
        <div className={InputStyle.registerBtn}>
            <MyButton type='submit' label="Register" />
        </div>

    </>
    );
}

export default Students;