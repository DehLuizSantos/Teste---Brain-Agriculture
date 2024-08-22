import * as S from './styles';
import IconButton from '../../atomos/IconButton';
import { useMemo } from 'react';
import { theme } from '@/styles/theme';
import LinkGroups, { LinksProps } from '@/components/moleculas/LinkGroups';
import { FadingComponent } from '@/components/atomos/FadeAnimation';

export type NavbarType = {
  isHover: boolean;
  modulo: string;
  links?: LinksProps[];
};
const Navbar = ({ isHover, links, modulo }: NavbarType) => {
  const LogoHeader = useMemo(() => (isHover ? <p>Logo</p> : <p>Logo Inicial</p>), [isHover]);

  return (
    <S.NavbarWrapper
      data-testid="navbar"
      data-active={isHover}
      color={isHover ? theme.colors.white : theme.colors.blue}
    >
      <S.NavbarHeader className={isHover ? 'nav-hover' : ''}>
        {LogoHeader}

        <IconButton
          tipo="round"
          size={'sm'}
          variant="transparent"
          color="gray"
          style={{ display: isHover ? 'block' : 'none' }}
          className="action-icon"
        >
          <p>Icone Sair</p>
        </IconButton>
      </S.NavbarHeader>

      <FadingComponent duration={600}>
        <S.NabarBody>
          {/* <NavbarTituloHeader isNavHover={isHover} modulo={modulo} icon={CiclosEncerrados} /> */}
          <p>TITULO</p>
          <LinkGroups links={links} isNavHover={isHover} />
        </S.NabarBody>
      </FadingComponent>

      <S.NavbarFooter
        data-active={isHover}
        data-testid="footer-navbar"
        style={{ width: isHover ? '280px' : '80px' }}
      >
        {/* <AjudaIcone tipo="navbar" isHover={isHover} /> */}

        {/* <Version
          isNavHover={isHover}
          ultimaAtt="dez 2023."
          versao={'10.876.23'}
        /> */}
        <p>Footer</p>
      </S.NavbarFooter>
    </S.NavbarWrapper>
  );
};

export default Navbar;
