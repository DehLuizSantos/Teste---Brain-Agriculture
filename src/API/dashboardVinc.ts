import { useEffect, useState } from 'react';
import { DashboardChartsInfos, DashboardChartsProps } from '@/interfaces/dashboard.interface';
import { theme } from '@/styles/theme';
import { useStore } from 'zustand';
import { useprodutoresStore } from '@/store/produtores/produtores-store-creator';
import { estadosECidades, nomesFazendas } from './produtor';

const dashboardColors = [
  theme.colors.blue,
  theme.colors.greenSec,
  theme.colors.orangeSec,
  theme.colors.purpleSec,
  theme.colors.redSti,
];

const DashboardData = () => {
  const { produtores } = useStore(useprodutoresStore);
  const [dashboardData, setDashboardData] = useState<{
    pieCharts: DashboardChartsProps;
    infoCards: DashboardChartsInfos;
  }>({
    pieCharts: [],
    infoCards: [],
  });

  useEffect(() => {
    const totalHectares = produtores.reduce((acc, produtor) => acc + produtor.totalHectares, 0);
    const totalFazendas = nomesFazendas.length;
    const estados = Object.keys(estadosECidades) as (keyof typeof estadosECidades)[];
    const culturasDisponiveis = ['Soja', 'Milho', 'Algodão', 'Café', 'Cana de Açúcar'] as const;

    const totalAreaAgricultavel = produtores.reduce(
      (acc, produtor) => acc + produtor.areaAgricultavel,
      0
    );
    const totalAreaVegetacao = produtores.reduce(
      (acc, produtor) => acc + produtor.areaVegetacao,
      0
    );

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

    const hectaresPorCultura = culturasDisponiveis.map((cultura: any, index) => {
      const totalHectares = produtores
        .filter((produtor) => produtor.culturasPlantadas.includes(cultura))
        .reduce((acc, produtor) => acc + produtor.totalHectares, 0);

      return {
        name: cultura,
        value: totalHectares,
        color: dashboardColors[index],
      };
    });

    setDashboardData({
      pieCharts: [
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
      ],
      infoCards: [
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
      ],
    });
  }, [produtores]); // Atualiza quando os produtores mudam

  return {
    dashboardPieInfos: dashboardData.pieCharts,
    dashboardInfos: dashboardData.infoCards,
  };
};

export default DashboardData;
