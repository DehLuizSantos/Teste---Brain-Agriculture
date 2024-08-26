import { Meta } from '@storybook/react';
import { ShellType, Shell } from '.';

export default {
  title: 'Shell',
  component: Shell,
} as Meta;

const props = {
  isHover: true,
  module: 'Exemplo',
};

const Template: any = (args: ShellType) => (
  <div>
    <Shell {...args}>
      <p>Exemplo</p>
    </Shell>
  </div>
);

export const ShellStory = Template.bind({
  ...props,
});

ShellStory.args = {
  ...props,
};
