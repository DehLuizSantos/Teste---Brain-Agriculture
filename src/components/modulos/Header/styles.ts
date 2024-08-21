import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 35px;
  position: relative;
`;

export const HeaderInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: block;

    @media (min-width: ${theme.responsive.md}) {
      display: flex;
    }

    align-items: center;
    gap: 15px;

    .icon-wrapper {
      width: 55px;
      height: 55px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      background-color: ${theme.colors.blue};
    }

    .info-wrapper {
      max-width: 672px;

      h1 {
        font-size: ${theme.sizes.large};
        color: ${theme.colors.blue};
        margin: 15px 0;

        @media (min-width: ${theme.responsive.md}) {
          margin-bottom: 5px;
        }
      }

      p {
        font-size: ${theme.sizes.small};
        color: ${theme.colors.blackSti};
        margin-bottom: 15px;

        @media (min-width: ${theme.responsive.md}) {
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
