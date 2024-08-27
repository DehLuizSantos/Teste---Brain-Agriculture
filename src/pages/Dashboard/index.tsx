import { Loading } from '@/components/atomos/Loading';
import { DashboardCharts } from '@/components/moleculas/DashboardCharts';
import DashboardInfos from '@/components/moleculas/DashboardInfos';
import { useDashboard } from '@/hooks/useDashboard';
import { useQuery } from '@tanstack/react-query';
import * as S from './styles';
import PageHeader from '@/components/moleculas/PageHeader';
import DashboardData from '@/API/dashboardVinc';

export const Dashboard = () => {
  const { dashboardInfos, dashboardPieInfos } = DashboardData();
  const { handleGetDashboardInfos } = useDashboard();
  const { data } = useQuery({
    queryKey: ['dashboard'],
    queryFn: () => handleGetDashboardInfos(),
  });

  return (
    <S.DashboardWrapper>
      <PageHeader info="Veja os dados atualizados de suas fazendas" title="Dashboard" />

      <DashboardInfos dashboardInfos={data?.dashboardInfos!} />
      <DashboardCharts dashboardPieInfos={data?.dashboardPieInfos!} />
    </S.DashboardWrapper>
  );
};
