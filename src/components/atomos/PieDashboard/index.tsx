import { PieChart, PieChartCell } from '@mantine/charts';
import * as S from './styles';

export type PieDashboardChartProps = {
  data: PieChartCell[];
  title: string;
  tooltipDataSource?: 'segment' | 'all' | undefined;
};
export const PieDashboardChart = ({
  data,
  title,
  tooltipDataSource = 'segment',
}: PieDashboardChartProps) => {
  return (
    <S.PieDashboardWrapper>
      <h4>{title}</h4>
      <PieChart data={data} withTooltip mx="auto" tooltipDataSource={tooltipDataSource!} />
    </S.PieDashboardWrapper>
  );
};
