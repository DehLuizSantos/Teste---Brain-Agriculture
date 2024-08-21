import type { Meta, StoryObj } from '@storybook/react';
import IconeBotao from '.';
import IconButton from '../IconButton';
import { FaBeer } from 'react-icons/fa';

const meta: Meta<typeof IconeBotao> = {
  component: IconeBotao,
  argTypes: {
    tipo: {
      control: 'radio',
      options: ['round', 'table'],
    },
    size: {
      control: 'radio',
      options: ['lg', 'md', 'sm', 'xl', 'xs'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconeBotao>;

export const Primary: Story = {
  args: {
    tipo: 'round',
    children: <FaBeer />,
    size: '',
  },
};
