import { Title } from '@mantine/core';
import { TitleWrapper } from './styles';

interface TitleModalProps {
  title: string;
}

export const TitleModal = ({ title }: TitleModalProps) => {
  return (
    <TitleWrapper>
      <Title order={2}>{title}</Title>
    </TitleWrapper>
  );
};
