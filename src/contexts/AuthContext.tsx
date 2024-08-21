'use client';

// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import jwt from 'jsonwebtoken';

// const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

// type AuthContextType = {
//   isAuthenticated: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const token = document.cookie.split('; ').find((row) => row.startsWith('auth_token='));
//     if (token) {
//       try {
//         jwt.verify(token.split('=')[1], SECRET_KEY);
//         setIsAuthenticated(true);
//       } catch (error) {
//         setIsAuthenticated(false);
//       }
//     }
//   }, []);

//   const login = async (email: string, password: string) => {
//     // Выполните логин
//     const response = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       setIsAuthenticated(true);
//       router.push('/');
//     } else {
//       setIsAuthenticated(false);
//     }
//   };

//   const logout = () => {
//     fetch('/api/auth/logout', {
//       method: 'POST',
//     }).then(() => {
//       setIsAuthenticated(false);
//       router.push('/login');
//     });
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };



// import React, { createContext, useState, useContext, ReactNode } from 'react';
// import { useRouter } from 'next/navigation';

// interface AuthContextProps {
//   isAuthenticated: boolean;
//   login: (email: string, password: string) => void;
//   logout: () => void;
// }

// export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const router = useRouter();

//   const login = (email: string, password: string) => {
//     // Логика авторизации
//     setIsAuthenticated(true);
//     router.push('/');
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     router.push('/login');
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };




// src/contexts/AuthContext.tsx

'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key';

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = document.cookie.split('; ').find((row) => row.startsWith('auth_token='));
    if (token) {
      try {
        jwt.verify(token.split('=')[1], SECRET_KEY);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      router.push('/');
    } else {
      setIsAuthenticated(false);
    }
  };

  const logout = () => {
    fetch('/api/auth/logout', {
      method: 'POST',
    }).then(() => {
      setIsAuthenticated(false);
      router.push('/login');
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
