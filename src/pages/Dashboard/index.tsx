import { Loading } from '@/components/atomos/Loading';
import { DashboardCharts } from '@/components/moleculas/DashboardCharts';
import DashboardInfos from '@/components/moleculas/DashboardInfos';
import { useDashboard } from '@/hooks/useDashboard';
import { useQuery } from '@tanstack/react-query';

export const Dashboard = () => {
  const { handleGetDashboardInfos } = useDashboard();
  const { data, isLoading } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => handleGetDashboardInfos(),
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <DashboardInfos dashboardInfos={data?.dashboardInfos!} />
      <DashboardCharts dashboardPieInfos={data?.dashboardPieInfos!} />
    </div>
  );
};
