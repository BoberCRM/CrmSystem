'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../layout';

export default function Data() {
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
      <div className="content">
        <h1>Data Page</h1>
        <p>Welcome to the data page!</p>
      </div>
    </Layout>
  );
}