import styled, { css } from 'styled-components';

type NavbarWrapperProps = {
  color: string;
};

export const NavbarWrapper = styled.div<NavbarWrapperProps>`
  ${({ theme, color }) => css`
    padding: 0;
    text-align: center;
    background-color: ${color};
    box-shadow: 8px 0px 11px -7px rgba(0, 0, 0, 0.5);
    height: 100vh;

    .logo {
      margin: 30px 0;

      &[data-active='true'] {
        border-right: 5px solid ${theme.colors.blue};
      }
    }
  `}
`;

export const NavbarHeader = styled.div`
  ${() => css`
    padding: 5px;
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;

    .action-icon {
      margin-bottom: 35px;
    }
  `}
`;

export const NabarBody = styled.div`
  ${({ theme }) => css`
    .selected {
      background-color: ${theme.colors.blue};

      p {
        color: ${theme.colors.white};
      }

      svg {
        color: ${theme.colors.white};
        width: 100px;
      }
    }
  `}
`;

export const NavbarFooter = styled.div`
  ${({ theme }) => css`
    text-align: center;
    position: fixed;
    bottom: 50px;
    left: 0;
    color: ${theme.colors.gray['700']};
  `}
`;
