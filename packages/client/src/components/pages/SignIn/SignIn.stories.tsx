import { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import SignIn from './index';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `SignIn`,
  component: SignIn,
};

const Template: Story<ComponentProps<typeof SignIn>> = (args) => (
  <SignIn {...args} />
);

export const SignInStory = Template.bind({});

SignInStory.args = {};
SignInStory.decorators = [ContainerDecorator];
