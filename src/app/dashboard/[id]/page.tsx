// src/app/dashboard/[id]/page.tsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './style.module.css';

interface DashboardItemPageProps {
  params: { id: string };
}

const DashboardItemPage: React.FC<DashboardItemPageProps> = ({ params }) => {
  const { id } = params;

  return (
    <div className={styles.container}>
      <h1>Dashboard Item {id}</h1>
      {/* Здесь вы можете добавить больше логики для отображения информации о пользователе */}
    </div>
  );
};

export default DashboardItemPage;
