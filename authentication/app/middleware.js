import { NextResponse } from "next/server";
import { verifyToken } from "./lib/jwt";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // protect only the /dashboard area in this demo
  if (!pathname.startsWith("/dashboard")) return NextResponse.next();

  const token = req.cookies.get("token")?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("form", pathname);
    return NextResponse.redirect(url);
  }

  try {
    await verifyToken(token);
    return NextResponse.next();
  } catch (error) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
