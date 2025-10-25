import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const cookies = parseCookies()

    // Check for admin cookie
    if (cookies.Admin) {
      router.push('/admin')
      return
    }

    // Check for user cookies
    if (cookies.Student || cookies.Employee || cookies.Parent) {
      router.push('/portal')
      return
    }

    // No auth, redirect to login
    router.push('/login')
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Loading...</p>
    </div>
  )
}
