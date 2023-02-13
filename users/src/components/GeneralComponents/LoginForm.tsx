import { Group } from "@mantine/core";
import { FormContext } from "../../lib/FormContext";
import { InputStyle } from "../../lib/InputStyle";
import MyButton from "../../partials/MyButton";
import { useContext } from 'react'

const LoginForm = () => {
    const {loginChange} = useContext(FormContext)
    return (
        <div className="flex flex-col w-screen">
            <div >


                <form action="">
                    <div className="grid lg:grid-cols-2 gap-1  text-center mt-10 mb-2">
                        <div>
                            logo
                        </div>
                        <div className={InputStyle.formDiv}>
                            <div>
                                <h1>Log In</h1>
                            </div>
                            <div className={InputStyle.inputDiv}>
                                <label
                                    htmlFor="username"
                                    className={InputStyle.label}
                                    onChange={(e: any) => {
                                        loginChange(e.target.value, "username")
                                      }}
                                >Username:
                                </label>
                                <input
                                    type="text"
                                    className={InputStyle.loginInput}
                                />
                            </div>
                            <div className={InputStyle.inputDiv}>
                                <label
                                    htmlFor="password"
                                    className={InputStyle.label}
                                    onChange={(e: any) => {
                                        loginChange(e.target.value, "password")
                                      }}
                                >Password:
                                </label>
                                <input
                                    type="password"
                                    className={InputStyle.loginInput}
                                />
                            </div>
                            <div>
                                <MyButton
                                    label="Login"
                                    className={InputStyle.loginBtn}
                                />
                            </div>
                        </div>
                    </div>
                </form >
            </div>
        </div >
    );
}

export default LoginForm;