import { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import NavBox from '.';

export default {
  title: `NavBox`,
  component: NavBox,
};

const Template: Story<ComponentProps<typeof NavBox>> = (args) => (
  <NavBox {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {};
