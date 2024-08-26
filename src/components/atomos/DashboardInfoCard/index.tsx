import * as S from './styles';

export type DashboardInforCardProps = {
  quantity: number;
  title: string;
};
export const DashboardInfoCard = ({ quantity, title }: DashboardInforCardProps) => {
  return (
    <S.DashboardInfoCardWrapper>
      <S.DashboardInfoTitle>
        <h2>{title}</h2>
      </S.DashboardInfoTitle>
      <S.DashboardInfoInfo>
        <h3>{quantity}</h3>
      </S.DashboardInfoInfo>
    </S.DashboardInfoCardWrapper>
  );
};
