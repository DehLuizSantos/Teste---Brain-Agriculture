import type { Meta, StoryObj } from '@storybook/react';
import HoverPopUp from '.';

const meta: Meta<typeof HoverPopUp> = {
  component: HoverPopUp,
};

export default meta;

type Story = StoryObj<typeof HoverPopUp>;

export const Primary: Story = {
  args: {
    children: 'exemplo',
    texto: 'exemplo',
  },
};