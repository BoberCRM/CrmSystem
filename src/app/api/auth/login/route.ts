// src/app/api/auth/login/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  
  // Логика аутентификации
  if (email === 'test@example.com' && password === 'password') {
    // Успешный вход
    return NextResponse.json({ success: true });
  } else {
    // Неудачный вход
    return NextResponse.json({ success: false }, { status: 401 });
  }
}
