import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
    let cookie = req.cookies.get('admin' || 'Admin')?.value

    console.log(cookie)
    return NextResponse.next()
}

export const config = {
    matcher: ['/']
}