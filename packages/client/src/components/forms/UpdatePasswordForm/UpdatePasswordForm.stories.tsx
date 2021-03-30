import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import UpdatePasswordForm from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `UpdatePasswordForm`,
  component: UpdatePasswordForm,
};

const Template: Story<ComponentProps<typeof UpdatePasswordForm>> = (args) => (
  <UpdatePasswordForm {...args} />
);

export const UpdatePasswordFormStory = Template.bind({});

UpdatePasswordFormStory.args = {};
UpdatePasswordFormStory.decorators = [ContainerDecorator];
