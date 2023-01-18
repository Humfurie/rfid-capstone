import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useCallback, useEffect } from 'react'
import axios from 'axios'
import Router from 'next/router'
import { parseCookies } from 'nookies'

export default function App({ Component, pageProps }: AppProps) {

  const parsedToken = parseCookies()
  console.log(parsedToken)
  axios.interceptors.request.use(
    async config => {
      const token = parsedToken.JWToken
      if(token) {
        config.headers!.authorization = 'Bearer ' + token
      }
      return config
    }
  )
  const test = useCallback(
    async () => {
      try {
        await axios.get(`http://127.0.0.1:3333/auth`)
        Router.push('/AdminDashboard')
      } catch (error) {
        Router.push('/')
      }
    }, []
  )



  useEffect(() => {
    test()
  },[test])
  
  return <Component {...pageProps} />
}
