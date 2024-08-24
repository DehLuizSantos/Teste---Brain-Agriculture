import styled, { css } from 'styled-components';

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    h1 {
      font-size: ${theme.sizes.small};
      color: ${theme.colors.greenSec};
      font-weight: bold;
    }

    h2 {
      font-size: ${theme.sizes.xSmall};
      color: ${theme.colors.greenSec};
      font-weight: bold;
    }
  `}
`;
