import { LogoutButton } from '@/components/atomos/LoginButton';
import TitlePage from '@/components/atomos/TitlePage';
import * as S from './styles';

type PageHeaderProps = {
  title: string;
  info: string;
};

export const PageHeader = ({ info, title }: PageHeaderProps) => {
  return (
    <S.PageHeaderWrapper>
      <TitlePage info={info} title={title} />
      <LogoutButton />
    </S.PageHeaderWrapper>
  );
};

export default PageHeader;
