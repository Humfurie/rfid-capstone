import { useState } from 'react';
import axios from 'axios'
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';


export default function Home() {
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
    router.push('/admin/dashboard')
  }

  return (
    <div className="login">
      <div>
        <h4>Log in</h4>
        <form onSubmit={e => {
          e.preventDefault()
          adminLogin()
        }} >
          <div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              required
              onChange={(e: any) => {
                loginChange(e.target.value, "username")
              }}
            />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              required
              onChange={(e: any) => {
                loginChange(e.target.value, "password")
              }}
            />
          </div>

          <div>
            <button type="submit"
            >
              Log in
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}