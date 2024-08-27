'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/components/layouts/AuthLayout';

export default function Statistic() {
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
    <AuthLayout>
      <div className="content">
        <h1>Statistic Page</h1>
        <p>Welcome to the Statistic page!</p>
      </div>
    </AuthLayout>
  );
}