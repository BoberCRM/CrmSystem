// /app/dashboard/page.tsx

import React from 'react';
import Link from 'next/link';
import styles from './style.module.css';

const DashboardPage = () => {
    // Пример статических данных для списка элементов
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.h}>Dashboard</h1>
            <ul className={styles.ul}>
                {items.map((item) => (
                    <li key={item.id} className={styles.li}>
                        <Link href={`/dashboard/${item.id}`} className={styles.a}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardPage;
