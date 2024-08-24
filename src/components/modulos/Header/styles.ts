import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 35px;
  `}
`;

export const HeaderInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: block;

    @media (min-width: ${theme.breakpoints.md}) {
      display: flex;
    }

    align-items: center;
    gap: 15px;

    .info-wrapper {
      max-width: 672px;

      h1 {
        font-size: ${theme.sizes.large};
        color: ${theme.colors.blackSec};
        margin-bottom: 15px;

        @media (min-width: ${theme.breakpoints.md}) {
          margin-bottom: 5px;
        }
      }

      p {
        font-size: ${theme.sizes.small};
        color: ${theme.colors.gray['700']};
        margin-bottom: 15px;

        @media (min-width: ${theme.breakpoints.md}) {
          margin-bottom: 0;
        }
      }
    }

    .ajuda-wrapper {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.gray['500']};
      border-radius: 8px;
    }
  `}
`;
