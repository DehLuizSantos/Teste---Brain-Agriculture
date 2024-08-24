import styled, { css } from 'styled-components';

export const LoginWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${theme.colors.blue};

    .login {
      max-width: 350px;
      margin: 0px 20px;

      img {
        height: 50px;
        display: block;

        @media (min-width: ${theme.breakpoints.md}px) {
          display: none;
        }
      }

      h1 {
        font-size: ${theme.sizes.xxLarge};
        color: ${theme.colors.white};
        margin-bottom: 15px;
      }

      a {
        color: ${theme.colors.blue['5']};
        font-size: ${theme.sizes.small};
        border-bottom: 1px solid ${theme.colors.blue['5']};
      }

      @media (min-width: ${theme.breakpoints.md}px) {
        margin: 0 auto;
      }
    }
  `}
`;

export const BeWelcomeWrapper = styled.div`
  ${({ theme }) => css`
    display: none;

    background-color: ${theme.colors.blue};

    padding: 30px;

    @media (min-width: ${theme.breakpoints.md}px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100vh;
      width: 50%;
    }

    img {
      height: 90px;
      margin-bottom: 15px;

      @media (min-width: ${theme.breakpoints.md}px) {
        height: 110px;
      }
    }

    h2 {
      color: ${theme.colors.white};
      text-align: center;
    }
  `}
`;
