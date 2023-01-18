import { Button, Group, Modal } from '@mantine/core';
import { FormContext } from '../lib/FormContext';
import { useContext } from 'react'


export default function Home() {
  const { login, setLogin, userLogin, loginChange, setRegister, registration, register, onChange } = useContext(FormContext)
  return (
    <div className="login">

      <Modal
        opened={login}
        onClose={() => setLogin(false)}
      >
        {/* Modal content */}


        <div>
          <h4>Log in</h4>
          <form onSubmit={e => {
            e.preventDefault()
            userLogin()
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
