import { DashboardChartsInfos, DashboardChartsProps } from '@/interfaces/dashboard.interface';
import produtores, { nomesFazendas } from './produtor';

const totalHectares = produtores.reduce((acc, produtor) => acc + produtor.totalHectares, 0);

// Número total de fazendas (número total de itens no array nomesFazendas)
const totalFazendas = nomesFazendas.length;

export const dashboardPieInfos: DashboardChartsProps = [
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

export const dashboardInfos: DashboardChartsInfos = [
  {
    quantity: totalFazendas,
    title: 'Total de fazendas em quantidade',
    duration: 100,
  },
  {
    quantity: totalHectares,
    title: 'Total de fazendas em hectares',
    duration: 300,
  },
];
