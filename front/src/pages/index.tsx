import { Button, Group, Modal } from '@mantine/core';
import { useState } from 'react';
import axios from 'axios'
import { setCookie } from 'nookies';
import Router from 'next/router';


export default function Home() {
  const [opened, setLogin] = useState(false)
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
    setLoginForm(prev => {
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
    }).then(res => {
      const token = res.data.token
      setCookie({}, 'JWToken', token, {
        maxAge: 30 * 24 * 60 * 60,
      })
    })
    Router.push('/AdminDashboard')
  }

  const adminLogin = async () => {
    await axios.post(`http://127.0.0.1:3333/login`, {
      username: loginForm.username,
      password: loginForm.password
    }).then(res => {
      const token = res.data.token
      setCookie({}, 'JWToken', token, {
        maxAge: 30 * 24 * 60 * 60
      })
    })
    Router.push('/AdminDashboard')
  }



  return (
    <div className="login">

      <Modal
        opened={opened}
        onClose={() => setLogin(false)}
      >
        {/* Modal content */}


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
                onChange={(e:any) => {
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

          <div>

            <Group position="center">
              <button onClick={() => {
                setRegister(true)
                setLogin(false)
              }}>Don't have an account? Register here.</button>
            </Group>

          </div>

        </div>

      </Modal>

      <Modal
        opened={register}
        onClose={() => setRegister(false)}
      >
        {/* Modal content */}
        <div>
          <h4>Register</h4>

          <form onSubmit={e => {
            e.preventDefault()
            registration()
          }}>

            <div>
              <label htmlFor="">E-mail:</label>
              <input
                type="email"
                required
                onChange={(e: any) => {
                  onChange(
                    e.target.value, "email"
                  )
                }}
              />
            </div>

            <div>
              <label htmlFor="">Username:</label>
              <input
                type="text"
                required
                onChange={(e: any) => {
                  onChange(
                    e.target.value, "username"
                  )
                }}
              />
            </div>

            <div>
              <label htmlFor="">Password</label>
              <input
                type="password"
                required
                onChange={(e: any) => {
                  onChange(
                    e.target.value, "password"
                  )
                }}
              />
            </div>

            <div>
              <button type="submit"
              >
                Register
              </button>
            </div>

          </form>

          <Group position="center">
            <button onClick={() => {
              setLogin(true)
              setRegister(false)
            }}>Have an account? Log in here.</button>
          </Group>

        </div>

      </Modal>

      <Group position="center">
        <Button onClick={() => setLogin(true)} className="border border-blue text-black">Log in</Button>
      </Group>
    </div>
  )
}
