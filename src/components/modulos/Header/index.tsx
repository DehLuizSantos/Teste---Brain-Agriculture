import * as S from './styles';

import { useLocation } from 'react-router-dom';

import usuario from '../../../assets/imagens/icons/Usuario.svg';
import HoverPopUp from '@/components/atomos/HoverPopUp';

type HeaderOption = {
  icon: string;
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
      usuarios: {
        icon: usuario,
        titulo: 'Usuários',
        subTitulo:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        info:
          'Cadastre, edite, delete, ou consulte os usuários que iram poder acessar o sistema.',
      }
      
    };

    return (
      HeaderOptions[info] ?? {
        icon: usuario,
        titulo: 'BoasVindas',
        subTitulo:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        info:
          'Cadastre, edite, delete, ou consulte os desdorbramentos de sua venda.',
      }
    );
  };

  return (
    <S.HeaderContainer>
      <S.HeaderInfoWrapper>
        <div className="icon-wrapper">
         <p>Icone</p>
        </div>
        <div className="info-wrapper">
          <h1>{HeaderInfos(paginaAtual).titulo}</h1>
          <p>{HeaderInfos(paginaAtual).subTitulo}</p>
        </div>

        <HoverPopUp
          texto={HeaderInfos(paginaAtual).info}
          className="ajuda-wrapper"
        >
         <p>Icone 2</p>
        </HoverPopUp>
      </S.HeaderInfoWrapper>

      <p>Usuario</p>

    </S.HeaderContainer>
  );
};

export default Header;
