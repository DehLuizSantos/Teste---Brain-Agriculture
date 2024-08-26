import styled, { css } from 'styled-components';

export const TitlePageWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 672px;

    h1 {
      font-size: ${theme.sizes.xLarge};
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
  `}
`;
