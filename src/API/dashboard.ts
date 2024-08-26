import { DashboardChartsInfos, DashboardChartsProps } from '@/interfaces/dashboard.interface';
import produtores, { estadosECidades, nomesFazendas } from './produtor';
import { theme } from '@/styles/theme';

const dashboardColors = [
  theme.colors.blue,
  theme.colors.greenSec,
  theme.colors.orangeSec,
  theme.colors.purpleSec,
  theme.colors.redSti,
];

const totalHectares = produtores.reduce((acc, produtor) => acc + produtor.totalHectares, 0);
const totalFazendas = nomesFazendas.length;
const estados = Object.keys(estadosECidades) as (keyof typeof estadosECidades)[];
const culturasDisponiveis = ['Soja', 'Milho', 'Algodão', 'Café', 'Cana de Açucar'] as const;

// Calcula o total de hectares para área agricultável e vegetação
const totalAreaAgricultavel = produtores.reduce(
  (acc, produtor) => acc + produtor.areaAgricultavel,
  0
);
const totalAreaVegetacao = produtores.reduce((acc, produtor) => acc + produtor.areaVegetacao, 0);

const usoSoloData = [
  {
    name: 'Área agricultável',
    value: totalAreaAgricultavel,
    color: theme.colors.blue,
  },
  {
    name: 'Área de vegetação',
    value: totalAreaVegetacao,
    color: theme.colors.greenSec,
  },
];
/* Calcula o total de heactares por estado */
const hectaresPorEstado: any = estados.map((estado, index) => {
  const totalHectares = produtores
    .filter((produtor) => produtor.estado === estado)
    .reduce((acc, produtor) => acc + produtor.totalHectares, 0);

  return {
    name: estado,
    value: totalHectares,
    color: dashboardColors[index],
  };
});

// Calcula o total de hectares por cultura
const hectaresPorCultura = culturasDisponiveis.map((cultura, index) => {
  const totalHectares = produtores
    .filter((produtor) => produtor.culturasPlantadas.includes(cultura))
    .reduce((acc, produtor) => acc + produtor.totalHectares, 0);

  return {
    name: cultura,
    value: totalHectares,
    color: dashboardColors[index],
  };
});

export const dashboardPieInfos: DashboardChartsProps = [
  {
    title: 'Por estado',
    duration: 100,
    data: hectaresPorEstado,
  },
  {
    title: 'Por cultura',
    duration: 300,
    data: hectaresPorCultura,
  },
  {
    title: 'Por uso de solo',
    duration: 500,
    data: usoSoloData,
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
