import { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import SignIn from './index';
import containerDecorator from '../../../../.storybook/decorators/containerDecorator';

export default {
  title: `SignIn`,
  component: SignIn,
};

const Template: Story<ComponentProps<typeof SignIn>> = (args) => (
  <SignIn {...args} />
);

export const SignInStory = Template.bind({});

SignInStory.args = {};
SignInStory.decorators = [containerDecorator];
