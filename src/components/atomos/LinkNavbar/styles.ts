import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const LinksControl = styled(Link)`
  ${({ theme }) => css`
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: ${theme.sizes.small};
    cursor: pointer;
    border: none;
    padding: 0;
    box-shadow: 0px 2px 0px 0px #c2dff9;

    :hover {
      opacity: 0.7;
    }

    &[data-active='true'] {
      height: 40px;
    }
  `}
`;

export const LinkWrapper = styled.div`
  ${({ theme }) => css`
    display: block;
    width: 100%;

    p {
      font-size: ${theme.sizes.small};
      color: ${theme.colors.white};
      white-space: nowrap;
      width: 100%;
      padding: 0 5px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    &[data-active='true'] {
      display: flex;
      justify-content: start;
      align-items: center;
      text-align: start;
      margin: 0;

      p {
        font-size: ${theme.sizes.meddium};
        margin-left: 10px;
        color: ${theme.colors.blue};
      }
    }
  `}
`;

export const LinkSvg = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      fill: ${theme.colors.blue};
      font-size: ${theme.sizes.xxLarge};
    }

    &[data-active='true'] {
      width: 40px;
    }
  `}
`;

export const Links = styled(Link)`
  ${({ theme }) => css`
    display: block;
    padding: 5px 15px;
    text-decoration: auto;
    font-size: ${theme.sizes.meddium};
    font-weight: 400;
    color: ${theme.colors.black};
    margin-left: 20px;
    border-left: 2px solid #c2dff9;
    border-bottom: 2px solid #c2dff9;
    text-align: start;
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};

    &:hover {
      opacity: 0.7;
    }
    .chevron {
      transition: transform 2000ms ease;
    }

    &[data-active='true'] {
      background-color: ${theme.colors.blue};
      color: ${theme.colors.white};

      svg {
        fill: ${theme.colors.white};
      }
    }
  `}
`;
