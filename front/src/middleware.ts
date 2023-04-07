import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import { jwtVerify } from 'jose'
import { redirect } from 'next/dist/server/api-utils'
import NextNodeServer from 'next/dist/server/next-server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    try {
        const cookie = request.cookies.get('Admin')
        const url = request.nextUrl.pathname
        // const verifiedToken = jwtVerify(cookie!.value, new TextEncoder().encode('userStudent'))
        // const verifiedToken = jwtVerify(cookie!.value, 'userStudent')
        // console.log(verifiedToken)
        // if (!verifiedToken && url.includes('/')) {
        //     request.nextUrl.pathname = '/login'
        //     return NextResponse.redirect(request.nextUrl)
        // }
        console.log(request.nextUrl.pathname)
        if (!cookie && url === '/') {
            request.nextUrl.pathname = '/login'
            return NextResponse.redirect(request.nextUrl)
            // request.nextUrl.pathname = "/login"
        }

        if (cookie && url === '/login') {
            request.nextUrl.pathname = '/'
            return NextResponse.redirect(request.nextUrl)
        }
        return NextResponse.next()



        // if (request.nextUrl.pathname === '/login') {
        //     return NextResponse.rewrite('/')
        // }


        // return NextResponse.redirect(new URL('/about-2', request.url))



    } catch (error) {

    }
}

export const config = {
    matcher: [
        '/',
        '/login'
    ]
}