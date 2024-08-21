// import { NextResponse } from 'next/server';
// import bcrypt from 'bcryptjs';

// // Замените на свою логику хранения пользователей
// const users: { email: string; password: string }[] = [];

// export async function POST(request: Request) {
//   const { email, password } = await request.json();

//   // Проверьте, существует ли пользователь
//   const existingUser = users.find((user) => user.email === email);
//   if (existingUser) {
//     return NextResponse.json({ error: 'User already exists' }, { status: 409 });
//   }

//   // Захешируйте пароль и сохраните нового пользователя
//   const hashedPassword = await bcrypt.hash(password, 10);
//   users.push({ email, password: hashedPassword });

//   return NextResponse.json({ message: 'Registration successful' });
// }


// src/app/api/auth/register.ts

import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  // Логика регистрации пользователя
  return NextResponse.json({ success: true });
}
