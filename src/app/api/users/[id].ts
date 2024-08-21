// /app/api/users/[id].ts

// import { NextApiRequest, NextApiResponse } from 'next';

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     const { id } = req.query;

//     // Пример данных пользователя
//     const users = {
//         1: { id: 1, name: 'John Doe', email: 'john@example.com' },
//         2: { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
//     };

//     const user = users[id as keyof typeof users];

//     if (user) {
//         res.status(200).json(user);
//     } else {
//         res.status(404).json({ message: 'User not found' });
//     }
// }


import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Получаем id из query и проверяем его тип
    const { id } = req.query;

    // Пример данных пользователя
    const users: Record<number, { id: number; name: string; email: string }> = {
        1: { id: 1, name: 'John Doe', email: 'john@example.com' },
        2: { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    };

    // Проверка типа id и преобразование к числу, если это строка
    if (typeof id === 'string') {
        const userId = parseInt(id, 10);
        const user = users[userId];

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } else {
        res.status(400).json({ message: 'Invalid ID' });
    }
}