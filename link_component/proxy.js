import { NextResponse } from "next/server";

// code for only authenticated users accesss to dashboard route or handling unAuthenticated

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
