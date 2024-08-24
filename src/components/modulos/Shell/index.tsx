import React from 'react';
import { AppShell, Container } from '@mantine/core';
import * as S from './styles';
import Navbar from '../Navbar';
import Header from '../Header';
import { LinksProps } from '@/components/moleculas/LinkGroups';
import { FaRegUserCircle } from 'react-icons/fa';
import { LogoutButton } from '@/components/atomos/LoginButton';

type ShellType = {
  children: React.ReactNode;
  links?: LinksProps[];
  modulo: string;
  isNavHover: boolean;
  navbarRef?: React.RefObject<HTMLDivElement>;
};
export function Shell({ children, modulo, isNavHover, links, navbarRef }: ShellType) {
  return (
    <S.ShellWrapper
      data-testid="app-shell-wrapper"
      navbar={{
        width: isNavHover ? 280 : 80,
        breakpoint: 0,
      }}
      padding="md"
      transitionTimingFunction="ease-in"
      transitionDuration={3}
    >
      <S.ShellNavbarWrapper ref={navbarRef} data-active={isNavHover}>
        <Navbar modulo={modulo} isHover={isNavHover} links={links} />
      </S.ShellNavbarWrapper>
      <S.ShellMainWrapper>
        <Container fluid>
          <Header />
          {children}
        </Container>
      </S.ShellMainWrapper>
    </S.ShellWrapper>
  );
}
