import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import ResetPassword from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `ResetPassword`,
  component: ResetPassword,
};

const Template: Story<ComponentProps<typeof ResetPassword>> = (args) => (
  <ResetPassword {...args} />
);

export const ResetPasswordStory = Template.bind({});

ResetPasswordStory.args = {};
ResetPasswordStory.decorators = [ContainerDecorator];
