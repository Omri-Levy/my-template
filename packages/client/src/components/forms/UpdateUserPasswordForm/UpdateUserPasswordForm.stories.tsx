import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import UpdateUserPasswordForm from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `UpdateUserPasswordForm`,
  component: UpdateUserPasswordForm,
};

const Template: Story<ComponentProps<typeof UpdateUserPasswordForm>> = (
  args
) => <UpdateUserPasswordForm {...args} />;

export const UpdateUserPasswordFormStory = Template.bind({});

UpdateUserPasswordFormStory.args = {};
UpdateUserPasswordFormStory.decorators = [ContainerDecorator];
