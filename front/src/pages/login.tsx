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
      }
    `}</style>
            <div className='bg-white-smoke border-powderblue-shades10% p-12 grid place-content-start md:place-content-center'>
                <Image
                    src={'/img/logo.jpg'}
                    alt={'logo'}
                    width={50}
                    height={50}
                    className='grid place-content-start md:place-content-center'
                />

            </div>
            <div className=' shadow-lg ml-96 mr-96 rounded-lg' >
                <h4 className='bg-teal-blue p-6 text-center text-white text-lg rounded-t-lg'>Log in</h4>
                <div className='grid place-content-start md:place-content-center'>
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