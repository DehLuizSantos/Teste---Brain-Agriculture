import type { Meta, StoryObj } from '@storybook/react';
import { FadingComponent } from '.';

const meta: Meta<typeof FadingComponent> = {
  component: FadingComponent,
};

export default meta;

type Story = StoryObj<typeof FadingComponent>;

export const Primary: Story = {
  args: {
    children: <p>Exemplo</p>,
    duration: 300,
  },
};
