import { Button, Grid, Modal, ModalProps } from '@mantine/core';
import * as S from './styles';
import { theme } from '@/styles/theme';

interface ModalDeleteProps extends ModalProps {
  description: string;
  onConfirm: () => void;
  setOpened: (value: boolean) => void;
}
export const ModalDelete = ({ description, onConfirm, setOpened, opened }: ModalDeleteProps) => {
  return (
    <Modal centered opened={opened} onClose={() => setOpened(false)} size={'sm'}>
      <S.ModalDeleteWrapper>
        <p>{description}</p>
      </S.ModalDeleteWrapper>
      <Grid mt={30}>
        <Grid.Col span={6}>
          <Button
            color={theme.colors.red}
            fullWidth
            onClick={() => setOpened(false)}
            variant="outline"
          >
            Cancelar
          </Button>
        </Grid.Col>

        <Grid.Col span={6}>
          <Button fullWidth onClick={onConfirm} color={theme.colors.blue}>
            Confirma
          </Button>
        </Grid.Col>
      </Grid>
    </Modal>
  );
};
