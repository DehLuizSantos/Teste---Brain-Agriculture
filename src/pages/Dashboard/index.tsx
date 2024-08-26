import { Loading } from '@/components/atomos/Loading';
import { DashboardCharts } from '@/components/moleculas/DashboardCharts';
import DashboardInfos from '@/components/moleculas/DashboardInfos';
import { useDashboard } from '@/hooks/useDashboard';
import { useQuery } from '@tanstack/react-query';
import { LogoutButton } from '@/components/atomos/LoginButton';
import TitlePage from '@/components/atomos/TitlePage';
import * as S from './styles';
import PageHeader from '@/components/moleculas/PageHeader';

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
    <S.DashboardWrapper>
      <PageHeader info="Veja os dados atualizados de suas fazendas" title="Dashboard" />

      <DashboardInfos dashboardInfos={data?.dashboardInfos!} />
      <DashboardCharts dashboardPieInfos={data?.dashboardPieInfos!} />
    </S.DashboardWrapper>
  );
};
