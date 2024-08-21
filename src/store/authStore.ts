// /store/authStore.ts

import create from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  setAuthenticated: (auth: boolean) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  setAuthenticated: (auth) => set({ isAuthenticated: auth }),
}));

export default useAuthStore;
