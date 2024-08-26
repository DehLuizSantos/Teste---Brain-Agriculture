import styled, { css } from 'styled-components';

export const PageHeaderWrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 60px;
    flex-wrap: wrap;
  `}
`;
