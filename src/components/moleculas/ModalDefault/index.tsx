import { MantineSize, Modal } from '@mantine/core';
import * as S from './styles';
import { theme } from '@/styles/theme';
import { TitleModal } from '@/components/atomos/TituloModal';
interface ModalDefaultProps {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: MantineSize | (string & {}) | number;
  title?: string;
}

export const ModalDefault = ({
  opened,
  onClose,
  children,
  size = 'auto',
  title = '',
}: ModalDefaultProps) => {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size={size}
      centered
      transitionProps={{ transition: 'rotate-left' }}
      overlayProps={{
        color: theme.colors.gray['500'],
        opacity: 0.55,
        blur: 3,
      }}
    >
      <S.ModalWrapper>
        {title && <TitleModal title={title} />}
        {children}
      </S.ModalWrapper>
    </Modal>
  );
};
