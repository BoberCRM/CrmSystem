// /app/settings/account/page.tsx

import React from 'react';
import styles from './style.module.css';

const AccountSettingsPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h}>Account Settings</h1>
            <p className={styles.p}>Manage your account details here.</p>
        </div>
    );
};

export default AccountSettingsPage;
