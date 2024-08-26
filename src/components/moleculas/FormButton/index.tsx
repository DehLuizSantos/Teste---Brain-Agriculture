import { Button } from '@mantine/core';
import * as S from './styles';

interface FormButtonProps {
  onCancel?: () => void;
  onClick?: () => void;
}
export const FormButton = ({ onCancel, onClick }: FormButtonProps) => {
  return (
    <S.FormButtonContainer>
      {onCancel && (
        <Button fullWidth onClick={onCancel} color="red" variant="outline">
          Cancelar
        </Button>
      )}
      <Button fullWidth onClick={onClick}>
        Confirmar
      </Button>
    </S.FormButtonContainer>
  );
};
