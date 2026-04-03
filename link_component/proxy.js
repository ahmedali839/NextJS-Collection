import { NextResponse } from 'next/server'

export function proxy(request) {
  const nextUrl = request.nextUrl;
  if (nextUrl.pathname === "/dashboard") {
    if (request.cookies.authToken) {
      return NextResponse.rewrite(new URL("/auth/dashboard", request.url));
    } else {
      return NextResponse.rewrite(new URL("/public/dashboard", request.url));
    }
  }
}
