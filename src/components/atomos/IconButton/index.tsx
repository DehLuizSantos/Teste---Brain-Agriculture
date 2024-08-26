import React, { memo, useCallback } from 'react';
import { ActionIconProps } from '@mantine/core';
import * as S from './styles';

export interface IconButtonProps extends ActionIconProps {
  color?: string;
  onClick?: () => void;
  tipo: 'table' | 'round';
}

const IconButton = ({ tipo, ...props }: IconButtonProps) => {
  const renderIconButton = useCallback(
    (tipo: 'table' | 'round') => {
      const selectsTipos = {
        round: <S.IconButtonDefault {...props} data-testid="round" />,
        table: <S.IconButtonTable {...props} data-testid="table" />,
      };
      return selectsTipos[tipo];
    },
    [tipo, props]
  );
  return renderIconButton(tipo);
};

export default memo(IconButton);
