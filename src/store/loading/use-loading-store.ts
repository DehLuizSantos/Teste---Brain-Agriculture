import { create } from 'zustand';
import { LoadingType, useLayoutStore } from './loading-store-creator';

export const useLoadingCreator = create<LoadingType>()(useLayoutStore);
