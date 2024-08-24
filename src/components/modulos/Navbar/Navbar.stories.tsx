import React from 'react';
import { Meta } from '@storybook/react';
import Navbar, { NavbarType } from '.';
import { LinksDinamicosMock } from './mocks';

export default {
  title: 'Components/modules/Navbar',
  component: Navbar,
} as Meta;

const props = {
  isHover: true,
  links: LinksDinamicosMock,
  module: 'Exemplo',
};

const Template: any = (args: NavbarType) => (
  <div style={{ maxWidth: args.isHover ? 280 : 80 }}>
    <Navbar {...args} />
  </div>
);

export const NavbarStory = Template.bind({
  ...props,
});

NavbarStory.args = {
  ...props,
};