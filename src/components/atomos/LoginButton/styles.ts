import styled from 'styled-components';
import { css } from 'styled-components';

export const LogoutButtonWrapper = styled.div`
  ${() => css``}
`;

export const LoginButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.colors.gray['500']};
    border: none;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;

    .aside {
      text-align: start;
      margin-left: 5px;
      font-size: ${theme.sizes.small};

      h5 {
        font-weight: 400;
        color: ${theme.colors.white};
        font-size: ${theme.sizes.meddium};
      }

      p {
        font-weight: 300;
        font-family: 'Open Sans', serif;
        color: ${theme.colors.white};
      }
    }
  `}
`;
