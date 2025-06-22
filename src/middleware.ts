import { NextResponse } from 'next/server';

export function middleware(request: Request) {
   console.log('Middleware is running');
   return NextResponse.redirect(new URL('/about', request.url));
}

export const config = {
    matcher: '/contact/:path*',
}


 