import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from 'axios';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    try {

        const cookie = request.cookies.get('Admin')
        const url = request.nextUrl.pathname
        // const id = url.match(/\/users\/employee\/(\d+)\/edit/)?.[1] ?? ''
        const paths = (
            url === '/'
            || url.startsWith('/users')
        )

        console.log(request.nextUrl.pathname)
        if (!cookie && paths) {
            request.nextUrl.pathname = '/login'
            return NextResponse.redirect(request.nextUrl)
        }

        if (cookie && url === '/login') {
            request.nextUrl.pathname = '/'
            return NextResponse.redirect(request.nextUrl)
        }
        return NextResponse.next()

    } catch (error) {

    }
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/admin',
        '/users/:path*'
    ]
}