import styled from 'styled-components';
import { css } from 'styled-components';

export const LogoutButtonWrapper = styled.div`
  ${() => css``}
`;

export const LoginButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.gray['700']};
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;

    .aside {
      text-align: start;
      margin-left: 5px;
      font-size: ${theme.sizes.small};

      h5 {
        font-weight: 900;
        color: ${theme.colors.white};
      }

      p {
        font-weight: 300;
        color: ${theme.colors.white};
      }
    }
  `}
`;
