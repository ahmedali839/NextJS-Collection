import { NextResponse } from "next/server";
// import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from "./i18n-config";

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`),
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url),
    );
  }
}

export const config = {
  matcher: ["/((?!_next).*)"],
};
