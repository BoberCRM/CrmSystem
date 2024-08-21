// /app/settings/layout.tsx

import React from 'react';
import Link from 'next/link';
import styles from './layout.module.css';

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/settings/account">Account Settings</Link>
                    </li>
                    <li>
                        <Link href="/settings/preferences">Preferences</Link>
                    </li>
                </ul>
            </nav>
            <main className={styles.content}>
                {children}
            </main>
        </div>
    );
};

export default SettingsLayout;
