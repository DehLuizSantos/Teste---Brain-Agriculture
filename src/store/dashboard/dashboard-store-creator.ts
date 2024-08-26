import { create } from 'zustand';
import { DashboardChartsInfos, DashboardChartsProps } from '@/interfaces/dashboard.interface';
import { dashboardInfos, dashboardPieInfos } from '@/API/dashboard';

interface DashboardstoreType {
  dashboardPieInfos: DashboardChartsProps;
  dashboardInfos: DashboardChartsInfos;
}

export const usedashboardStore = create<DashboardstoreType>()((set) => ({
  dashboardInfos: dashboardInfos,
  dashboardPieInfos: dashboardPieInfos,
}));
