import React from 'react';
import { Container } from '@mantine/core';
import * as S from './styles';
import Navbar from '../Navbar';
import Header from '../Header';
import { useLocation } from 'react-router-dom';
import { LinksProps } from '@/components/moleculas/LinkGroups';

type ConchaAplicacaolType = {
  children: React.ReactNode;
  links?: LinksProps[];
  modulo: string;
  isNavHover: boolean;
  navbarRef?: React.RefObject<HTMLDivElement>;
};
export function ConchaAplicacao({
  children,
  modulo,
  isNavHover,
  links,
  navbarRef,
}: ConchaAplicacaolType) {
  const rotaAcessada = useLocation();
  const paginaAtual = rotaAcessada.pathname.replace('/', '');

  return (
    <S.ConchaAplicacaoWrapper
      data-testid="app-shell-wrapper"
      navbar={{
        width: isNavHover ? 280 : 80,
        breakpoint: 0,
      }}
      padding="md"
      transitionTimingFunction="ease-in"
      transitionDuration={3}
    >
      <S.ConchaAplicacaoNavbarWrapper ref={navbarRef} data-active={isNavHover}>
        <Navbar modulo={modulo} isHover={isNavHover} links={links} />
      </S.ConchaAplicacaoNavbarWrapper>
      <S.ConchaAplicacaoMainWrapper>
        <Container fluid>
          {paginaAtual.length > 0 && <Header />}
          {children}
        </Container>
      </S.ConchaAplicacaoMainWrapper>
    </S.ConchaAplicacaoWrapper>
  );
}
