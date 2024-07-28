'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from "@/UI/button/Button"
import Header from '@/UI/header/header';

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
    <div>
      <Header/>
      <h1>Основная страница</h1>
      <Button onClick={logout} variant="danger">Выйти</Button>
    </div>
  );
}