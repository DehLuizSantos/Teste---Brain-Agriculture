import { ActionIcon } from '@mantine/core';
import styled, { css } from 'styled-components';

export const IconButtonDefault = styled(ActionIcon)`
  ${() => css``}
`;

export const IconButtonTable = styled(ActionIcon)`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray['300']};
    box-shadow: -2px 0px 0px 0px ${theme.colors.blue};

    &:hover {
      opacity: 0.9;
      background-color: transparent;
    }
  `}
`;
