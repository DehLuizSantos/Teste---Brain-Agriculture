import styled, { css } from 'styled-components';

export const LinkGroupWrapper = styled.div`
  ${({ theme }) => css`
    .link {
      p {
        color: ${theme.colors.white};
      }

      svg {
        fill: ${theme.colors.white};
      }

      &[data-active] {
        background-color: ${theme.colors.white};
        border-right: 5px solid ${theme.colors.blue};

        p {
          color: ${theme.colors.blue};
        }

        svg {
          fill: ${theme.colors.blue};
        }
      }
    }

    .link.nav-hover {
      background-color: ${theme.colors.white};

      p {
        color: ${theme.colors.blue};
      }

      svg {
        fill: ${theme.colors.blue};
      }

      &[data-active] {
        background-color: ${theme.colors.blue};
        border-right: 5px solid ${theme.colors.white};

        p {
          color: ${theme.colors.white};
        }

        svg {
          fill: ${theme.colors.white};
        }
      }
    }
  `}
`;

export const LinkActive = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.blue};
    border-left: 5px solid ${theme.colors.blue};
    padding: 3px 0;
  `}
`;
