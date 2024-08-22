import { type StateCreator } from 'zustand';

export interface LayoutType {
  isNavbarHover: boolean;
  setIsNavHover: (state: boolean) => void;
}

export const useLayoutStore: StateCreator<LayoutType> = (set) => ({
  isNavbarHover: false,
  setIsNavHover: (state) => set(() => ({ isNavbarHover: state })),
});
