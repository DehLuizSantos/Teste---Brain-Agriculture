import * as S from './styles';
import { useLocation } from 'react-router-dom';
import { LogoutButton } from '@/components/atomos/LoginButton';
import { VscDashboard } from 'react-icons/vsc';
import { PiPlantLight } from 'react-icons/pi';

type HeaderOption = {
  icon: JSX.Element;
  titulo: string;
  subTitulo: string;
  info: string;
};

type HeaderOptions = {
  [key: string]: HeaderOption;
};

const Header = () => {
  const rotaAcessada = useLocation();
  const paginaAtual = rotaAcessada.pathname.replace('/', '');
  const HeaderInfos = (info: string) => {
    const HeaderOptions: HeaderOptions = {
      dashboard: {
        icon: <VscDashboard />,
        titulo: 'Dashboard',
        subTitulo:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        info: 'Cadastre, edite, delete, ou consulte os usuários que iram poder acessar o sistema.',
      },
      produtor: {
        icon: <PiPlantLight />,
        titulo: 'Produtor',
        subTitulo:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        info: 'Cadastre, edite, delete, ou consulte os usuários que iram poder acessar o sistema.',
      },
    };

    return (
      HeaderOptions[info] ?? {
        icon: <VscDashboard />,
        titulo: 'Dashboard',
        subTitulo:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        info: 'Cadastre, edite, delete, ou consulte os usuários que iram poder acessar o sistema.',
      }
    );
  };

  return (
    <S.HeaderContainer>
      <S.HeaderInfoWrapper>
        <div className="info-wrapper">
          <h1>{HeaderInfos(paginaAtual).titulo}</h1>
          <p>{HeaderInfos(paginaAtual).subTitulo}</p>
        </div>
      </S.HeaderInfoWrapper>

      <LogoutButton />
    </S.HeaderContainer>
  );
};

export default Header;
