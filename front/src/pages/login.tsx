import { useState } from 'react';
import axios from 'axios'
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { InputStyle } from '../lib/InputStyle';

export default function login() {
    const router = useRouter()

    const [form, setForm] = useState<any>({
        username: '',
        email: '',
        password: '',
    })

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const loginChange = (value: any, column: any) => {
        setLoginForm(prev => {
            return {
                ...prev, [column]: value
            }
        })
    }

    const adminLogin = async () => {
        await axios.post(`http://127.0.0.1:3333/login`, {
            username: loginForm.username,
            password: loginForm.password
        }).then(res => {
            const token = res.data.token
            setCookie(null, 'Admin', token, {
                maxAge: 24 * 60 * 60,
            })
        })
        router.push('/')
    }
    return (
        <div>
            <style global jsx>{`
      html,
      body, 
      body > div:first-child,
      div#__next,F
      div#__next > div {
        height: 100%;
        background-color: #388087;
      }
    `}</style>
            <div className='bg-white-smoke border-powderblue-shades10% pt-16'>
                <div>
                    <Image
                        src={'/img/logo.png'}
                        alt={'logo'}
                        width={50}
                        height={50}
                        className='mx-auto'
                    />
                </div>
                <div className='mx-auto mt-4'>
                    <h4 className='bg-teal-blue p-4 text-center text-white text-lg rounded-t-xl ml-96 mr-96' >Log in</h4>
                </div>

            </div>

            <div className=' shadow-lg ml-96 mr-96 rounded-lg' >
                <div className='grid place-content-start md:place-content-center bg-white-smoke mt-(-2) rounded-b-lg '>
                    <form onSubmit={e => {
                        e.preventDefault()
                        adminLogin()
                    }}
                    >
                        <div className='mt-6'>
                            <label
                                htmlFor=""
                                className='block'>
                                <span className='block text-sm font-medium text-slate-700'>
                                    Username
                                </span>
                                <input
                                    type="text"
                                    required
                                    onChange={(e: any) => {
                                        loginChange(e.target.value, "username")
                                    }}
                                    className={InputStyle.inputLogin}
                                />
                            </label>
                        </div>

                        <div className='mt-6'>
                            <label
                                htmlFor=""
                                className='block'>
                                <span className='block text-sm font-medium text-slate-700'>
                                    Password
                                </span>
                                <input
                                    type="password"
                                    required
                                    onChange={(e: any) => {
                                        loginChange(e.target.value, "password")
                                    }}
                                    className={InputStyle.inputLogin}
                                />
                            </label>
                        </div>

                        <div className=' mb-6'>
                            <button
                                type="submit"
                                className={InputStyle.loginBtn}
                            >
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}