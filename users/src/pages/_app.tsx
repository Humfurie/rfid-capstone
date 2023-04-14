import '../styles/globals.css'
import type { AppProps } from 'next/app'
import nookies, { destroyCookie, parseCookies, setCookie } from 'nookies'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { FormContext } from '../lib/FormContext'
import useSWR from 'swr'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const cookies = parseCookies()
  let token: any
  let authRoute: any
  let userGetRole: string
  if ('Employee' in cookies) {
    token = cookies.Employee
    authRoute = `${process.env.NEXT_PUBLIC_API_URL}/users/employee/auth`
    userGetRole = 'employee'
  } else if ('Student' in cookies) {
    token = cookies.Student
    authRoute = `${process.env.NEXT_PUBLIC_API_URL}/users/student/auth`
    userGetRole = 'student'
  }
  else if ('Parent' in cookies) {
    token = cookies.Parent
    authRoute = `${process.env.NEXT_PUBLIC_API_URL}/users/parent/auth`
    userGetRole = 'parent'
  }
  axios.interceptors.request.use(
    async config => {
      if (token) {
        config.headers!.authorization = 'Bearer ' + token
      }
      return config
    }
  )
  // const [user, setUser] = useState({})
  const fetcher = (url: any) => axios.get(url)
  const { data, error } = useSWR(authRoute, fetcher, { refreshInterval: 5000 })

  // console.log(data?.data)


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
    }).then((res: { data: { token: any, data: any, role: string } }) => {
      try {
        const role = res.data.role
        const token = res.data.token
        console.log(role)
        setCookie({}, role, token, {
          maxAge: 24 * 60 * 60
        })
        router.reload()
      } catch (error) {
        console.log(error)
        return 401
      }
    }).catch(err => console.log(err))

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
      setCurrentMenu,

      data, 
      error, 

    }}>
      <Component {...pageProps} />
    </FormContext.Provider>
  )
}
