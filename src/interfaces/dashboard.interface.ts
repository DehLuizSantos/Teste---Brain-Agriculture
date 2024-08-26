import { PieChartCell } from '@mantine/charts';

export type DashboardChartsProps = {
  title: string;
  duration: number;
  data: PieChartCell[];
}[];

export type DashboardChartsInfos = { quantity: number; title: string; duration: number }[];
