import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import UpdateUserProfile from './index';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `UpdateUserProfile`,
  component: UpdateUserProfile,
};

const Template: Story<ComponentProps<typeof UpdateUserProfile>> = (args) => (
  <UpdateUserProfile {...args} />
);

export const UpdateUserProfileStory = Template.bind({});

UpdateUserProfileStory.args = {};
UpdateUserProfileStory.decorators = [ContainerDecorator];
