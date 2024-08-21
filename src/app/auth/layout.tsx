// /app/auth/layout.tsx

import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <header>
                <h1>Authentication</h1>
            </header>
            <main>{children}</main>
        </div>
    );
}
