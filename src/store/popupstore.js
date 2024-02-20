import { create } from "zustand";

export const useStore = create((set) => ({
  isShown: true,
  setIsShown: (newStatus) => set(() => ({ isShown: newStatus })),
}));
