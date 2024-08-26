import { ReactNode } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";
import Head from '@/app/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head />
      <body>
        <AuthProvider>
            <div style={{ display: 'flex' }}>
              <Sidebar />
              <div style={{ flexGrow: 1 }}>
                <Header />
                <main style={{ padding: '20px' }}>
                  {children}
                </main>
              </div>
            </div>
        </AuthProvider>
      </body>
    </html>
  );
}

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <html lang="en">
//       <Head />
//       <body>
//         <AuthProvider>
//           <div style={{ display: 'flex' }}>
//             <Sidebar />
//             <div style={{ flexGrow: 1 }}>
//               <Header />
//               <main style={{ padding: '20px' }}>
//                 {children}
//               </main>
//             </div>
//           </div>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// };

// export default Layout