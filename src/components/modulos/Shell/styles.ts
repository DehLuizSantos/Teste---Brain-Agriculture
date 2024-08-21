import { AppShell } from '@mantine/core';
import styled, { css } from 'styled-components';
import fundo from '../../../assets/imagens/novos-icones/STI_iconePreto.svg';

export const ConchaAplicacaoWrapper = styled(AppShell)`
  ${() => css`
    background-image: url(${fundo});
    background-repeat: no-repeat;
    background-position: calc(100% + 150px) 60px;
    background-color: #eeeeee;
    background-blend-mode: exclusion;
  `}
`;

export const ConchaAplicacaoNavbarWrapper = styled(AppShell.Navbar)`
  ${({ theme }) => css`
    transition: all 0.2s; /* Transição suave de 0.1 segundos */

    &[data-active='true'] {
      border-right: 5px solid ${theme.colors.blue};
    }
  `}
`;
export const ConchaAplicacaoMainWrapper = styled(AppShell.Main)`
  ${() => css`
    max-width: 1500px;
  `}
`;
