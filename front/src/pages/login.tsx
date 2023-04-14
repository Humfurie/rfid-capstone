import { useState } from 'react';
import axios from 'axios'
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Style } from '../lib/Style';
import { Footer } from '@mantine/core';
import Footers from '../components/Footers';

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
        router.reload()
    }
    return (
        <div className='h-screen bg-gradient-to-b from-[#c2edce] via-[#badfe7] to-[#6fb3b8]'>
            <div className='pt-16'>
                <Image
                    src={'/../img/logo.png'}
                    alt={'logo'}
                    width={50}
                    height={50}
                    className='mx-auto'
                />
            </div>
            <div className='delay-75'>
                <div className='mx-auto mt-4  '>
                    <h4
                        className='p-4 text-center text-white-smoke text-lg rounded-t-xl ml-96 mr-96 bg-teal-blue'>
                        Log in here !
                    </h4>
                </div>
                <div className='mx-auto  mt-(-2) rounded-b-lg ml-96 mr-96 bg-white-smoke p-4'>
                    <form onSubmit={e => {
                        e.preventDefault()
                        adminLogin()
                    }}
                    >
                        <div className='mt-6 '>
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
                                    className={Style.inputLogin}
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
                                    className={Style.inputLogin}
                                />
                            </label>
                        </div>

                        <div className=' mb-6'>
                            <button
                                type="submit"
                                className={Style.loginBtn}
                            >Log in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='absolute bottom-0 right-0'>
                <Footers />
            </div>
        </div>
    )
}