import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
import { redirect } from 'next/dist/server/api-utils'
import NextNodeServer from 'next/dist/server/next-server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    try {
        const cookie = request.cookies.getAll()
        console.log(cookie.length)
        const url = request.nextUrl.pathname
        const paths = (url === '/'
            || url === '/employee'
            || url === '/employee/activity'
            || url === '/employee/profile'
            || url === '/student'
            || url === '/student/activity'
            || url === '/student/profile'
            || url === '/student/schedule'
            || url === '/parent'
            || url === '/parent/profile'
            || url === '/parent/children'
        )

        if (!cookie && paths) {

            request.nextUrl.pathname = '/login'
            return NextResponse.redirect(request.nextUrl)
            // request.nextUrl.pathname = "/login"
        }
        if (cookie.length === 0 && paths) {
            request.nextUrl.pathname = '/login'
            return NextResponse.redirect(request.nextUrl)
        }
        if (cookie && url === '/login') {
            request.nextUrl.pathname = '/'
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
        '/employee/:path*',
        '/parent/:path*',
        '/student/:path*'
    ]
}