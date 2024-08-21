// // /hooks/useTheme.ts

// import { useTheme } from '@/contexts/ThemeContext';

// const useThemeHook = () => {
//   const { theme, toggleTheme } = useTheme();
//   return { theme, toggleTheme };
// };

// export default useThemeHook;


// src/hooks/useTheme.ts

import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
}
