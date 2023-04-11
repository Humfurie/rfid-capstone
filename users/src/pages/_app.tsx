import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { parseCookies, setCookie } from 'nookies'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { FormContext } from '../lib/FormContext'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const parsedToken = parseCookies()
  // console.log(parsedToken)
  axios.interceptors.request.use(
    async config => {
      const token = parsedToken.JWToken
      if (token) {
        config.headers!.authorization = 'Bearer ' + token
      }
      return config
    }
  )

  // useMemo(
  //   async () => {
  //     try {
  //       await axios.get(`http://127.0.0.1:3333/auth`)
  //       router.push('/')
  //     } catch (error) {
  //       router.push('/login')
  //     }
  //   }, []
  // )

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

  const loginOnChange = (value: any, column: any) => {
    setLoginForm((prev: any) => {
      return {
        ...prev, [column]: value
      }
    })
  }

  /**
   * user login
   */
  const userLogin = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
      username: loginForm.username,
      password: loginForm.password
    }).then((res: { data: { token: any; }; }) => {
      try {
        const token = res.data.token
        setCookie({}, 'JWToken', token, {
          maxAge: 24 * 60 * 60
        })
        router.push('/')
      } catch (error) {
        console.log(error)
        return 401
      }

    })

  }

  // navigation bar
  const [open, setOpen] = useState(true);
  const [currentMenu, setCurrentMenu] = useState("");

  return (
    <FormContext.Provider value={{
      login,
      setLogin,
      register,
      setRegister,
      onChange,
      loginOnChange,
      // registration,
      userLogin,

      open,
      setOpen,
      currentMenu,
      setCurrentMenu

    }}>
      <Component {...pageProps} />
    </FormContext.Provider>
  )
}
