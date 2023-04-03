import { FormContext } from "../../lib/FormContext";
import MyButton from "../../partials/MyButton";
import { useContext } from 'react'
import { Style } from "../../lib/Style";
import { TextField } from "@mui/material";


const LoginForm = () => {
    const { loginOnChange,
        userLogin } = useContext(FormContext)
    return (
        <div className="flex flex-col w-screen">
            <div >
                <form onSubmit={e => {
                    e.preventDefault()
                    userLogin()
                }}>
                    <div className="grid lg:grid-cols-2 gap-1  text-center mt-10 mb-2">
                        <div>
                            logo
                        </div>
                        <div className={Style.formDiv}>
                            <div>
                                <h1>Log In</h1>
                            </div>
                            <div className={Style.inputDiv}>
                                <TextField type="text" id="outlined-basic" label="Username" variant="outlined"
                                    className={Style.loginInput}
                                    onChange={(e: any) => {
                                        loginOnChange(e.target.value, "username")
                                    }} />
                            </div>
                            <div className={Style.inputDiv}>
                                <TextField
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    className={Style.loginInput}
                                    onChange={(e: any) => {
                                        loginOnChange(e.target.value, "password")
                                    }} />
                            </div>
                            <div>
                                <MyButton
                                    label="Login"
                                    className={Style.loginBtn}
                                    onClick={() => {
                                        if ('employee') {

                                        } else if ('student') {

                                        } else if ('parent') {

                                        } else {
                                            'Not Found!'
                                        }
                                    }}
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