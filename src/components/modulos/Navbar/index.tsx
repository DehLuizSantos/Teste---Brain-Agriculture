import * as S from './styles';
import IconButton from '../../atomos/IconButton';
import { useMemo } from 'react';
import { theme } from '@/styles/theme';
import LinkGroups, { LinksProps } from '@/components/moleculas/LinkGroups';
import { FadingComponent } from '@/components/atomos/FadeAnimation';
import LogoInicial from '../../../assets/Logo';
import Logo from '../../../assets/LogoBA';

export type NavbarType = {
  isHover: boolean;
  modulo: string;
  links?: LinksProps[];
};
const Navbar = ({ isHover, links, modulo }: NavbarType) => {
  const LogoHeader = useMemo(() => (isHover ? <Logo /> : <LogoInicial />), [isHover]);

  return (
    <S.NavbarWrapper
      data-testid="navbar"
      data-active={isHover}
      color={isHover ? theme.colors.white : theme.colors.blue}
    >
      <S.NavbarHeader className={isHover ? 'nav-hover' : ''}>{LogoHeader}</S.NavbarHeader>

      <S.NabarBody>
        <LinkGroups links={links} isNavHover={isHover} />
      </S.NabarBody>
    </S.NavbarWrapper>
  );
};

export default Navbar;
