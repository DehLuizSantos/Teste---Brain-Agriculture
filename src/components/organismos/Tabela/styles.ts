import styled, { css } from 'styled-components';

export const ActionIconsWrapper = styled.div`
  ${() => css`
    display: flex;
    gap: 10px;
    align-items: center;
  `}
`;

export const TableContainer = styled.div`
  ${() => css`
    margin: 15px 0;
    width: 100%;
    border-radius: 4px;

    .mantine-Select-label {
      display: none;
    }
  `}
`;

export const RenderToolbar = styled.div`
  ${() => css`
    display: flex;
    gap: 16px;
    padding: 8px;
    flex-wrap: wrap;
  `}
`;
export const PanelTitleWrapper = styled.div`
  ${() => css``}
`;
export const PanelOptions = styled.div`
  ${({ theme }) => css`
    margin: 15px 0;
    display: flex;
    gap: 30px;
    justify-content: start;
    align-items: center;

    h2 {
      font-size: ${theme.sizes.meddium};
      color: ${theme.colors.blue};
      font-weight: bold;
      text-transform: uppercase;
      border: 2px solid ${theme.colors.blue};
      padding: 5px;
      border-radius: 5px;
    }
  `}
`;

export const NoHaveDataDiv = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    text-align: center;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 280px;
    }
  `}
`;
