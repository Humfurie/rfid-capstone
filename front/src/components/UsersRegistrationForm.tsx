import { Modal } from "@mantine/core";
import { useState } from "react";
import { InputStyle } from "../lib/InputStyle";
import MyButton from "../lib/partials/MyButton";
import Employees from "./UsersRegistrationComponents/Employees";
import Parents from "./UsersRegistrationComponents/Parents";
import Students from "./UsersRegistrationComponents/Students";

const UsersRegistrationForm = (props: any) => {
    const { registration, setRegistration } = props
    const [option, setOption] = useState<any>(null)
    const values = {
        Employees: 'Employees',
        Students: 'Students',
        Parents: 'Parents'
    }

    const userRegister = (e: any) => {
        console.log(e)
      }

 

    console.log(option, 'this is option')
    return (
        <>
            <Modal
                opened={registration}
                onClose={() => setRegistration(false)}
                className="w-screen"
                size="70%"
            >
                <h4 className="text-center">Registration</h4>
                <form onSubmit={e => {
                    e.preventDefault()
                    userRegister(e.currentTarget.value)
                }

                } >
                    <div>
                        <label htmlFor="">Role:</label>
                        <select value={option} onChange={e => {
                            setOption(e.target.value)

                        }} className={InputStyle.inputType} >
                            <option selected disabled >---Select Role---</option>
                            <option value={values.Employees} className={InputStyle.selectHover}>Employees</option>
                            <option value={values.Students}>Students</option>
                            <option value={values.Parents}>Parents</option>
                        </select>
                    </div>

                    {option === values.Employees ?
                        <Employees />
                        : option === values.Students ?
                           <Students />
                            : option === values.Parents ?
                               <Parents />
                                : <div className="border border-red-200 rounded p-7 m-5  bg-red-100">
                                    <p className="text-center font-bold text-xl ">Please Select Role</p>
                                </div>
                            }

                </form>
            </Modal>
        </>
    );
}

export default UsersRegistrationForm;