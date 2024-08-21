// /app/settings/preferences/page.tsx

import React from 'react';
import styles from './style.module.css';

const PreferencesPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h}>Preferences</h1>
            <p className={styles.p}>Set your preferences here.</p>
        </div>
    );
};

export default PreferencesPage;
