import styled, { css } from 'styled-components';

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    letter-spacing: 0.5px;
    margin-bottom: 2.1rem;
    overflow: hidden;
    color: ${theme.colors.blue};
    white-space: nowrap;
  `}
`;
