import { DashboardInfoCard } from '@/components/atomos/DashboardInfoCard';
import * as S from './styles';
import { FadingComponent } from '@/components/atomos/FadeAnimation';
import { DashboardChartsInfos } from '@/interfaces/dashboard.interface';

type DashboardInfosProps = {
  dashboardInfos: DashboardChartsInfos;
};

const DashboardInfos = ({ dashboardInfos }: DashboardInfosProps) => {
  return (
    <S.DashboardInfosWrapper>
      {dashboardInfos?.map((info) => (
        <FadingComponent key={info.duration} duration={info.duration}>
          <DashboardInfoCard {...info} />
        </FadingComponent>
      ))}
    </S.DashboardInfosWrapper>
  );
};
export default DashboardInfos;
