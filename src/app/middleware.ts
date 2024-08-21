// src/app/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }

  return NextResponse.next();
}

// Middleware применяется к этим маршрутам
export const config = {
  matcher: ['/dashboard/:path*', '/settings/:path*'],
};
