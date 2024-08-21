// /app/layout.tsx

// import React from 'react';
// import { AuthProvider } from '@/contexts/AuthContext'; // Импорт провайдера авторизации
// import Header from '@/components/header/header'; // Импорт компонента Header
// import Sidebar from '@/components/sidebar/sidebar'; // Импорт компонента Sidebar
// import '@/assets/styles/globals.css'; // Импорт глобальных стилей

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <AuthProvider>
//           <Header />
//           <div style={{ display: 'flex' }}>
//             <Sidebar />
//             <main style={{ flexGrow: 1, padding: '20px' }}>
//               {children}
//             </main>
//           </div>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }

// src/app/layout.tsx

'use client';

import React from 'react';
import { AuthProvider } from '@/contexts/AuthContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <header>
            {/* Вставьте сюда ваш header */}
          </header>
          <aside>
            {/* Вставьте сюда ваш sidebar */}
          </aside>
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}

