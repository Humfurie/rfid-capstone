import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { jwtVerify } from 'jose'
import { redirect } from 'next/dist/server/api-utils'
import NextNodeServer from 'next/dist/server/next-server'
import axios from 'axios';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    try {
        const admin = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth`);
        console.log(admin)
        const cookie = request.cookies.get('Admin')
        const url = request.nextUrl.pathname

        console.log(request.nextUrl.pathname)
        if (!cookie && url === '/') {
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