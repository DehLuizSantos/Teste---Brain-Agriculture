import type { Meta, StoryObj } from '@storybook/react';
import { ConchaAplicacao } from '.';
import { LinksDinamicosMock } from '../Navbar/mocks';

const meta: Meta<typeof ConchaAplicacao> = {
  component: ConchaAplicacao,
};

export default meta;

type Story = StoryObj<typeof ConchaAplicacao>;

export const Primary: Story = {
  args: {
    links: LinksDinamicosMock,
    isNavHover: true,
    modulo: 'exemplo',
  },
};
