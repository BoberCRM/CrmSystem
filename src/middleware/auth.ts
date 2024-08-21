// /middleware/auth.ts

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   const isAuthenticated = req.cookies.get('authToken');

//   if (!isAuthenticated) {
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   return NextResponse.next();
// }


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  
  if (!token) {
    return NextResponse.redirect('/login');
  }

  // Продолжить запрос, если токен есть
  return NextResponse.next();
}
