import * as S from './styles';
import { useLocation } from 'react-router-dom';
import { LogoutButton } from '@/components/atomos/LoginButton';
import { VscDashboard } from 'react-icons/vsc';
import { PiPlantLight } from 'react-icons/pi';
import { useCallback } from 'react';

type HeaderOption = {
  icon: JSX.Element;
  titulo: string;
  info: string;
};

type HeaderOptions = {
  [key: string]: HeaderOption;
};

const Header = () => {
  const rotaAcessada = useLocation();
  const paginaAtual = rotaAcessada.pathname.replace('/', '');
  const HeaderInfos = useCallback(
    (info: string) => {
      const HeaderOptions: HeaderOptions = {
        dashboard: {
          icon: <VscDashboard />,
          titulo: 'Dashboard',
          info: 'Cadastre, edite, delete, ou consulte os usuários que iram poder acessar o sistema.',
        },
        produtor: {
          icon: <PiPlantLight />,
          titulo: 'Produtor',
          info: 'Veja os dados atualizados em tempo real.',
        },
      };

      return (
        HeaderOptions[info] ?? {
          icon: <VscDashboard />,
          titulo: 'Dashboard',
          info: 'Veja os dados atualizados em tempo real.',
        }
      );
    },
    [paginaAtual]
  );

  return (
    <S.HeaderContainer>
      <S.HeaderInfoWrapper>
        <div className="info-wrapper">
          <h1>{HeaderInfos(paginaAtual).titulo}</h1>
          <p>{HeaderInfos(paginaAtual).info}</p>
        </div>
      </S.HeaderInfoWrapper>

      <LogoutButton />
    </S.HeaderContainer>
  );
};

export default Header;
