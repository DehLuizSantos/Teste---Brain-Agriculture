import type { Meta, StoryObj } from '@storybook/react';
import LinkNavbar from '.';
import UsuarioIcon from '../../../assets/imagens/icons/Usuario.svg';

const meta: Meta<typeof LinkNavbar> = {
  title: 'LinkNavbar',
  component: LinkNavbar,
};

export default meta;

type Story = StoryObj<typeof LinkNavbar>;

export const Primary: Story = {
  args: {
    label: 'Usuários',
    icon: UsuarioIcon,
    to: '/usuarios',
    linksExpand: [
      {
        label: 'Ciclos ativos',
        to: '/',
      },
      {
        label: 'Ciclos inativos',
        to: '/',
      },
    ],
  },
};
