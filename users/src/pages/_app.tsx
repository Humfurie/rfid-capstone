import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { parseCookies, setCookie } from 'nookies'
import axios from 'axios'
import Router from 'next/router'
import { useMemo, useState } from 'react'
import { FormContext } from '../lib/FormContext'

export default function App({ Component, pageProps }: AppProps) {
  const parsedToken = parseCookies()
  console.log(parsedToken)
  axios.interceptors.request.use(
    async config => {
      const token = parsedToken.JWToken
      if (token) {
        config.headers!.authorization = 'Bearer ' + token
      }
      return config
    }
  )

  useMemo(
    async () => {
      try {
        await axios.get(`http://127.0.0.1:3333/auth`)
        Router.push('/UserDashboard')
      } catch (error) {
        Router.push('/')
      }
    }, []
  )

  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)

  const [form, setForm] = useState<any>({
    username: '',
    email: '',
    password: '',
  })

  const [loginForm, setLoginForm] = useState({
    username: '',
    password: ''
  })


  const onChange = (value: any, column: any) => {
    setForm((prev: any) => {
      return {
        ...prev, [column]: value
      }
    })
  }

  const loginChange = (value: any, column: any) => {
    setLoginForm((prev: any) => {
      return {
        ...prev, [column]: value
      }
    })
  }


  const registration = async () => {
    await axios.post(`http://127.0.0.1:3333/register`, {
      username: form.username,
      email: form.email,
      password: form.password
    }).then((res: { data: { token: any; }; }) => {
      const token = res.data.token
      setCookie({}, 'JWToken', token, {
        maxAge: 30 * 24 * 60 * 60,
      })
    })
    Router.push('/UserDashboard')
  }

  const userLogin = async () => {
    await axios.post(`http://127.0.0.1:3333/login`, {
      username: loginForm.username,
      password: loginForm.password
    }).then((res: { data: { token: any; }; }) => {
      const token = res.data.token
      setCookie({}, 'JWToken', token, {
        maxAge: 30 * 24 * 60 * 60
      })
    })
    Router.push('/UserDashboard')
  }


  return (
    <FormContext.Provider value={{
      login,
      setLogin,
      register,
      setRegister,
      onChange,
      loginChange,
      registration,
      userLogin
    }}> 
      <Component {...pageProps} />
    </FormContext.Provider>
  )
}
