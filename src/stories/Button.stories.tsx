import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '../components/button/button';
import { ButtonProps } from '../components/button/button';

export default {
  title: 'QUX/Button',
  component: Button,
} as Meta;

const Template  = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  children: "Primary Button"
};

export const PrimaryDanger = Template.bind({});
PrimaryDanger.args = {
  type: "primary-danger",
  children: "Primary Danger"
};

export const PrimarySuccess = Template.bind({});
PrimarySuccess.args = {
  type: "primary-success",
  children: "Primary Success"
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  type: "primary-disabled",
  children: "Primary Disabled"
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  children: "Secondary"
};

export const SecondaryDanger = Template.bind({});
SecondaryDanger.args = {
  type: "secondary-danger",
  children: "Secondary Danger"
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  type: "secondary-disabled",
  children: "Secondary Disabled"
};
