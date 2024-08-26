import { Meta } from '@storybook/react';
import { FadingComponent, FadingComponentProps } from '.';

export default {
  title: 'FadeComponent',
  component: FadingComponent,
} as Meta;

const props = {
  children: <p>Exemplo</p>,
  duration: 300,
};

const Template: any = (args: FadingComponentProps) => (
  <div>
    <FadingComponent {...args}>Exemplo</FadingComponent>
  </div>
);

export const FadingComponentStory = Template.bind({
  ...props,
});

FadingComponentStory.args = {
  ...props,
};
