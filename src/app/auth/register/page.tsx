// /app/auth/register/page.tsx
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './style.module.css';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        // Добавьте здесь логику для обработки регистрации
        console.log('Email:', email, 'Password:', password);

        // Пример перенаправления после успешной регистрации
        router.push('/login');
    };

    return (
        <div className={styles.container}>
            <h1>Register</h1>
            <form onSubmit={handleRegister} className={styles.form}>
                <input
                    className={styles.input}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.button} type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
