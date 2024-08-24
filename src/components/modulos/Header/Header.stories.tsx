import type { Meta, StoryObj } from '@storybook/react';
import Cabecalho from '.';

const meta: Meta<typeof Cabecalho> = {
  component: Cabecalho,
};

export default meta;

type Story = StoryObj<typeof Cabecalho>;

export const Primary: Story = {
  args: {},
};
