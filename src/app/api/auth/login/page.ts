// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';
// import { serialize } from 'cookie';

// const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

// export async function POST(request: Request) {
//   const { email, password } = await request.json();

//   // Замените на логику проверки пользователя в базе данных
//   if (email === 'user@example.com' && password === 'password') {
//     const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

//     const cookie = serialize('auth_token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'strict',
//       maxAge: 3600,
//       path: '/',
//     });

//     const response = NextResponse.json({ message: 'Login successful' });
//     response.headers.set('Set-Cookie', cookie);

//     return response;
//   }

//   return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
// }



// import { NextApiRequest, NextApiResponse } from 'next';
// import jwt from 'jsonwebtoken';

// const SECRET_KEY = 'your_secret_key';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { email, password } = req.body;

//   if (email === 'user@example.com' && password === 'password123') {
//     const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
//     res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600`);
//     res.status(200).json({ message: 'Login successful' });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// }


// src/app/api/auth/login.ts

import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Выполняем проверку email и password
  if (email === 'user@example.com' && password === 'password') {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    const response = NextResponse.json({ success: true });
    response.cookies.set('auth_token', token, { httpOnly: true });
    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
