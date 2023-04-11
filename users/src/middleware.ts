import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
import { redirect } from 'next/dist/server/api-utils'
import NextNodeServer from 'next/dist/server/next-server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    try {
        let cookie
        let newPaths: string
        const studentCookie = request.cookies.get('Student')
        const employeeCookie = request.cookies.get('Employee')
        const parentCookie = request.cookies.get('Parent')



        const url = request.nextUrl.pathname
        const paths = (url === '/'
            || url.startsWith('/users')
        )
        const studentUrl = (url.startsWith('/users/student'))
        const employeeUrl = (url.startsWith('/users/employee'))
        const parentUrl = (url.startsWith('/users/parent'))

        console.log(studentCookie, employeeCookie, parentCookie)

        if (studentCookie?.name === 'Student') {
            cookie = studentCookie
            newPaths = '/users/student'
            if (employeeUrl || parentUrl || url === '/') {
                request.nextUrl.pathname = '/users/student'
                return NextResponse.redirect(request.nextUrl)
            }
        }
        else if (employeeCookie?.name === 'Employee') {
            cookie = employeeCookie
            newPaths = '/users/employee'
            if (studentUrl || parentUrl || url === '/') {
                request.nextUrl.pathname = '/users/employee'
                return NextResponse.redirect(request.nextUrl)
            }
        }
        else if (parentCookie?.name === 'Parent') {
            cookie = parentCookie
            newPaths = '/users/parent'
            if (studentUrl || employeeUrl || url === '/') {
                request.nextUrl.pathname = '/users/parent'
                return NextResponse.redirect(request.nextUrl)
            }
        } else {
            cookie = null
            newPaths = '/login'
        }

        if (!cookie && paths) {
            request.nextUrl.pathname = '/login'
            return NextResponse.redirect(request.nextUrl)
        }

        if (cookie && url === '/login') {
            request.nextUrl.pathname = newPaths
            return NextResponse.redirect(request.nextUrl)
        }

        return NextResponse.next()

    } catch (error) {
        console.log(error)
    }
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/users/:path*',

    ]
}