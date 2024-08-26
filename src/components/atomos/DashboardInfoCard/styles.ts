import styled, { css } from 'styled-components';

export const DashboardInfoCardWrapper = styled.div`
  ${({ theme }) => css`
    width: 210px;
    height: 150px;
    background: ${theme.colors.white};
    border-radius: 15px;
    text-align: center;
    box-shadow:
      inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px ${theme.colors.gray['500']},
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

    @media (min-width: ${theme.breakpoints.md}px) {
      width: 330px;
    }
  `}
`;
export const DashboardInfoTitle = styled.div`
  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.colors.gray['500']};
    padding: 10px 0;

    h2 {
      color: ${theme.colors.blackSec};
      font-size: ${theme.sizes.large};
      font-weight: bold;
      font-family: 'Fira Sans', sans-serif;
    }
  `}
`;

export const DashboardInfoInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;

    h3 {
      color: ${theme.colors.blackSec};
      font-size: ${theme.sizes.xLarge};
      font-weight: 600;
      font-family: 'Fira Sans', sans-serif;
      color: ${theme.colors.gray['700']};
    }
  `}
`;
