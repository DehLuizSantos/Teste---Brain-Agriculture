import { PieDashboardChart } from '@/components/atomos/PieDashboard';
import * as S from './styles';
import { PieChartCell } from '@mantine/charts';
import { FadingComponent } from '@/components/atomos/FadeAnimation';

type DashboardChartsProps = {
  title: string;
  duration: number;
  data: PieChartCell[];
}[];

export const DashboardCharts = () => {
  const dashboardPieInfos: DashboardChartsProps = [
    {
      title: 'Por estado',
      duration: 100,
      data: [
        { name: 'SP', value: 400, color: 'green' },
        { name: 'RJ', value: 200, color: 'gray.6' },
      ],
    },
    {
      title: 'Por cultura',
      duration: 300,
      data: [
        { name: 'SP', value: 400, color: 'green' },
        { name: 'RJ', value: 200, color: 'gray.6' },
      ],
    },
    {
      title: 'Por uso de solo',
      duration: 500,
      data: [
        { name: 'SP', value: 400, color: 'green' },
        { name: 'RJ', value: 200, color: 'gray.6' },
      ],
    },
  ];

  return (
    <S.DashboardChartsWrapper>
      {dashboardPieInfos.map((pie) => (
        <FadingComponent key={pie.duration} duration={pie.duration}>
          <PieDashboardChart title={pie.title} data={pie.data} />
        </FadingComponent>
      ))}
    </S.DashboardChartsWrapper>
  );
};
