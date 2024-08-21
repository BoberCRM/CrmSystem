// // /hooks/useMediaQuery.ts

// import { useState, useEffect } from 'react';

// const useMediaQuery = (query: string) => {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const mediaQueryList = window.matchMedia(query);
//     const listener = () => setMatches(mediaQueryList.matches);
    
//     mediaQueryList.addListener(listener);
//     listener();
    
//     return () => mediaQueryList.removeListener(listener);
//   }, [query]);

//   return matches;
// };

// export default useMediaQuery;


// src/hooks/useMediaQuery.ts

import { useState, useEffect } from 'react';

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = () => setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}
