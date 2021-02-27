import { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import Logo from '.';

export default {
  title: `Logo`,
  component: Logo,
};

const Template: Story<ComponentProps<typeof Logo>> = (args) => (
  <Logo {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {};
