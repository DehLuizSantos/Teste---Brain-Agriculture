import styled from 'styled-components';
import { css } from 'styled-components';

export const PieDashboardWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    background-color: ${theme.colors.white};
    border-radius: 15px;
    box-shadow:
      inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px ${theme.colors.gray['500']},
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    width: 210px;
    padding-bottom: 15px;

    h4 {
      color: ${theme.colors.blackSec};
      font-weight: bold;
      font-size: ${theme.sizes.xLarge};
      margin-bottom: 15px;
      border-bottom: 2px solid ${theme.colors.gray['500']};
      padding: 15px 0;
    }
  `}
`;
