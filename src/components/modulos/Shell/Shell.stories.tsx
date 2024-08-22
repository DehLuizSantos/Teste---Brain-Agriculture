import type { Meta, StoryObj } from '@storybook/react';
import { Shell } from '.';
import { LinksDinamicosMock } from '../Navbar/mocks';

const meta: Meta<typeof Shell> = {
  component: Shell,
};

export default meta;

type Story = StoryObj<typeof Shell>;

export const Primary: Story = {
  args: {
    links: LinksDinamicosMock,
    isNavHover: true,
    modulo: 'exemplo',
  },
};
