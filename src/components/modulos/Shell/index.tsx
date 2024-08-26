import React from 'react';
import { Container } from '@mantine/core';
import * as S from './styles';
import Navbar from '../Navbar';
import { LinksProps } from '@/components/moleculas/LinkGroups';

export type ShellType = {
  children: React.ReactNode;
  links?: LinksProps[];
  isNavHover: boolean;
  navbarRef?: React.RefObject<HTMLDivElement>;
};
export function Shell({ children, isNavHover, links, navbarRef }: ShellType) {
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
        <Navbar isHover={isNavHover} links={links} />
      </S.ShellNavbarWrapper>
      <S.ShellMainWrapper>
        <Container fluid>{children}</Container>
      </S.ShellMainWrapper>
    </S.ShellWrapper>
  );
}
