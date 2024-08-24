import { create } from 'zustand';
import { LayoutType, useLayoutStore } from './layout-store-creator';

export const useLayoutCreator = create<LayoutType>()(useLayoutStore);
