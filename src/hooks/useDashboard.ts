import { useStore } from 'zustand';
import { useLoadingCreator } from '@/store/loading/use-loading-store';
import { usedashboardStore } from '@/store/dashboard/dashboard-store-creator';

export const useDashboard = () => {
  const { dashboardInfos, dashboardPieInfos } = useStore(usedashboardStore);
  const { setLoading } = useStore(useLoadingCreator);

  const handleGetDashboardInfos = (): Promise<typeof dashboardData> => {
    setLoading(true);
    const dashboardData = {
      dashboardInfos: dashboardInfos,
      dashboardPieInfos: dashboardPieInfos,
    };
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dashboardData);
        setLoading(false);
      }, 800);
    });
  };

  return { handleGetDashboardInfos };
};
