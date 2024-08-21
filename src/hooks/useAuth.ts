// /hooks/useAuth.ts

// import { useAuth } from '@/contexts/AuthContext';

// const useAuthHook = () => {
//   const { isAuthenticated, login, logout } = useAuth();
//   return { isAuthenticated, login, logout };
// };

// export default useAuthHook;


// import { useContext } from 'react';
// import { AuthContext } from '@/contexts/AuthContext';

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// src/hooks/useAuth.ts

import { useAuth } from '@/contexts/AuthContext';

export default useAuth;

