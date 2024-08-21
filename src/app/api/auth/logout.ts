// import { NextResponse } from 'next/server';
// import { serialize } from 'cookie';

// export async function POST(request: Request) {
//   const cookie = serialize('auth_token', '', {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === 'production',
//     sameSite: 'strict',
//     expires: new Date(0),
//     path: '/',
//   });

//   const response = NextResponse.json({ message: 'Logout successful' });
//   response.headers.set('Set-Cookie', cookie);

//   return response;
// }


// src/app/api/auth/logout.ts

import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set('auth_token', '', { maxAge: -1 });
  return response;
}
