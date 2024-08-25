import { DashboardInfoCard } from '@/components/atomos/DashboardInfoCard';
import { DashboardCharts } from '@/components/moleculas/DashboardCharts';
import DashboardInfos from '@/components/moleculas/DashboardInfos';

export const Dashboard = () => {
  return (
    <div>
      <DashboardInfos />

      <DashboardCharts />
    </div>
  );
};
