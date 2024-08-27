"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from "@/components/sidebar/sidebar";
import Header from "@/components/header/header";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  if (pathname === '/login') {
    return <>{children}</>;
  }

  return (
    <div className="container">
      <Header/>
      <Sidebar/>
      <main>
        {children}
      </main>
    </div>
  );
};

export default AuthLayout;