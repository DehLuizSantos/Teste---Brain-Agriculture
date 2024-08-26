import * as S from './styles';

type TitlePageProps = {
  title: string;
  info: string;
};

const TitlePage = ({ info, title }: TitlePageProps) => {
  return (
    <S.TitlePageWrapper>
      <h1>{title}</h1>
      <p>{info}</p>
    </S.TitlePageWrapper>
  );
};

export default TitlePage;
