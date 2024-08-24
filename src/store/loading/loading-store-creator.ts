import { type StateCreator } from 'zustand';

export interface LoadingType {
  loading: boolean;
  setLoading: (state: boolean) => void;
}

export const useLayoutStore: StateCreator<LoadingType> = (set) => ({
  loading: false,
  setLoading: (state) => set(() => ({ loading: state })),
});
