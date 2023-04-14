import React from 'react';
import Button from './Button';

export default {
  title: 'React/Button',
  argTypes: {
    text: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    shadow: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    type: {
      control: { type: 'select', options: ['filled', 'outline', 'text'] },
    },
    textColor: {
      control: { type: 'select', options: ['default', 'white', 'primary'] },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {
  type: 'default',
  text: 'Default',
  backgroundColor: 'default',
  textColor: 'default',
  shadow: false,
};

export const defaultDisabledButton = Template.bind({});
defaultDisabledButton.args = {
  text: 'Disabled',
  backgroundColor: 'default',
  textColor: 'default',
  shadow: false,
  isDisabled: true,
};

export const outlineButton = Template.bind({});
outlineButton.args = {
  text: 'Outline',
  textColor: 'primary',
  type: 'outline',
  shadow: false,
};

export const textButton = Template.bind({});
textButton.args = {
  text: 'Text',
  backgroundColor: 'transparent',
  textColor: 'primary',
  shadow: false,
  type: 'text',
};

export const textDisabledButton = Template.bind({});
textDisabledButton.args = {
  text: 'TextDisabled',
  shadow: false,
  isDisabled: true,
  textColor: 'default',
  type: 'text',
};

export const isLoadingButton = Template.bind({});
isLoadingButton.args = {
  text: 'Loading',
  backgroundColor: 'transparent',
  shadow: true,
  isLoading: true,
  textColor: 'default',
  type: 'text',
};

// export const disableShadow = Template.bind({});
// disableShadow.args = {
//   text: 'Default',
//   backgroundColor: 'primary',
//   type: 'filled',
//   textColor: 'white',
//   shadow: true,
// };

export const startIconButton = Template.bind({});
startIconButton.args = {
  text: 'Starticon',
  backgroundColor: 'primary',
  type: 'filled',
  startIcon: true,
  textColor: 'white',
  shadow: true,
  size:'small',
};
export const endIconButton = Template.bind({});
endIconButton.args = {
  text: 'Endicon',
  backgroundColor: 'primary',
  type: 'filled',
  endIcon: true,
  textColor: 'white',
  shadow: true,
};

export const primaryButton = Template.bind({});
primaryButton.args = {
  text: 'Primary',
  backgroundColor: 'primary',
  textColor: 'white',
  shadow: true,
};
export const secondaryButton = Template.bind({});
secondaryButton.args = {
  text: 'Secondary',
  backgroundColor: 'secondary',
  textColor: 'white',
  shadow: true,
};

export const dangerButton = Template.bind({});
dangerButton.args = {
  text: 'Danger',
  backgroundColor: 'danger',
  textColor: 'white',
  shadow: true,
};