import { PieDashboardChart } from '@/components/atomos/PieDashboard';
import * as S from './styles';
import { FadingComponent } from '@/components/atomos/FadeAnimation';
import { DashboardChartsProps } from '@/interfaces/dashboard.interface';

type DashboardChartProps = {
  dashboardPieInfos: DashboardChartsProps;
};

export const DashboardCharts = ({ dashboardPieInfos }: DashboardChartProps) => {
  return (
    <S.DashboardChartsWrapper>
      {dashboardPieInfos?.map((pie) => (
        <FadingComponent key={pie.duration} duration={pie.duration}>
          <PieDashboardChart title={pie.title} data={pie.data} />
        </FadingComponent>
      ))}
    </S.DashboardChartsWrapper>
  );
};
