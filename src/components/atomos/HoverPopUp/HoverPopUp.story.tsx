import { Meta } from '@storybook/react';
import HoverPopUp, { HoverPopUpProps } from '.';

export default {
  title: 'HoverPopUp',
  component: HoverPopUp,
} as Meta;

const props = {
  children: 'exemplo',
  texto: 'exemplo',
};

const Template: any = (args: HoverPopUpProps) => (
  <div>
    <HoverPopUp {...args}>Exemplo</HoverPopUp>
  </div>
);

export const HoverPopUpStory = Template.bind({
  ...props,
});

HoverPopUpStory.args = {
  ...props,
};
