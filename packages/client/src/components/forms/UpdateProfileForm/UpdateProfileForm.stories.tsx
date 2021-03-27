import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import UpdateProfileForm from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `UpdateProfileForm`,
  component: UpdateProfileForm,
};

const Template: Story<ComponentProps<typeof UpdateProfileForm>> = (args) => (
  <UpdateProfileForm {...args} />
);

export const UpdateProfileFormStory = Template.bind({});

UpdateProfileFormStory.args = {};
UpdateProfileFormStory.decorators = [ContainerDecorator];
