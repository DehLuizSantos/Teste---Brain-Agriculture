import { DashboardInfoCard } from '@/components/atomos/DashboardInfoCard';
import * as S from './styles';
import { FadingComponent } from '@/components/atomos/FadeAnimation';

const DashboardInfos = () => {
  const infos = [
    {
      quantity: 5,
      title: 'Total de fazendas em quantidade',
      duration: 100,
    },
    {
      quantity: 50000,
      title: 'Total de fazendas em hectares',
      duration: 300,
    },
  ];
  return (
    <S.DashboardInfosWrapper>
      {infos?.map((info) => (
        <FadingComponent key={info.duration} duration={info.duration}>
          <DashboardInfoCard {...info} />
        </FadingComponent>
      ))}
    </S.DashboardInfosWrapper>
  );
};
export default DashboardInfos;
