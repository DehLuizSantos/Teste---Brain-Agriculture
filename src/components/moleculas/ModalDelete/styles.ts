import styled from 'styled-components';
import { css } from 'styled-components';

export const ModalDeleteWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    p {
      color: ${theme.colors.blackSec};
      font-weight: bold;
    }
  `}
`;
