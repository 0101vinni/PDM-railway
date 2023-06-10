import {create} from 'zustand';

const useThemeStore = create((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme: theme }),
}));

export default useThemeStore;
