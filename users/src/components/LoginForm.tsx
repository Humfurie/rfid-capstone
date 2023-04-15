import { FormContext } from "../lib/FormContext";
import { useContext } from 'react'
import { Style } from "../lib/Style";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Image from 'next/image';
// import pic from '../logo.jpg'


const LoginForm = () => {
    const { loginOnChange,
        userLogin } = useContext(FormContext) ?? null
    return (
        <div className="flex flex-col w-full h-full">
            <div >
                <form onSubmit={e => {
                    e.preventDefault()
                    userLogin()
                }}>
                  <div className="flex pt-14 justify-center">
                  <div className={`${Style.tableBg}`}>
                            <div>
                                Log in here!
                            </div>
                            <div className={Style.inputDiv}>
                                <TextField type="text" id="outlined-basic" label="Username" variant="outlined"
                                    // className={Style.loginInput}
                                    onChange={(e: any) => {
                                        loginOnChange(e.target.value, "username")
                                    }} />
                            </div>
                            <div className={Style.inputDiv}>
                                <TextField
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    // className={Style.loginInput}
                                    onChange={(e: any) => {
                                        loginOnChange(e.target.value, "password")
                                    }} />
                            </div>
                            <div>
                                <Button
                                     color="primary"
                                       variant="contained"
                                     className={Style.loginBtn}
                                    type="submit"
                                >
                                    Log In
                                </Button>
                            </div>
                        </div>

                  </div>
                       
                
                </form >
            </div>
        </div >
    );
}

export default LoginForm;