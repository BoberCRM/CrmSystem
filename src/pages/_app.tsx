// /pages/_app.tsx

import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '@/assets/styles/globals.css'; // Импорт глобальных стилей

// Импорт провайдеров, если они есть
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Head>
          <title>My Next.js App</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
