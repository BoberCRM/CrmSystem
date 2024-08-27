import React, { ReactNode } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

import Head from '@/app/head';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head />
      <body>
          <AuthProvider>
              {children}
          </AuthProvider>
      </body>
    </html>
  )
}
