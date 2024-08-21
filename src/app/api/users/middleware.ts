// /app/api/middleware.ts

import { NextRequest, NextResponse } from 'next/server';

// Пример middleware, который проверяет, авторизован ли пользователь
export function middleware(req: NextRequest) {
    const token = req.headers.get('authorization');

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    // Добавьте здесь логику проверки токена
    // Например, декодирование токена и проверка его действительности

    // Если токен валиден, продолжаем выполнение запроса
    return NextResponse.next();
}

// Указываем, какие маршруты должны проходить через этот middleware
export const config = {
    matcher: '/api/users/:path*',
};
