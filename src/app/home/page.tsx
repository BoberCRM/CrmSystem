'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/app/layout';

export default function Home() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null; // или отображать загрузку или другую информацию
  }

  return (
    <Layout>
      <div>
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
      </div>
    </Layout>

  );
}