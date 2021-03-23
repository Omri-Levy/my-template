import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import DeleteAllUsersModal from '.';
import ContainerDecorator from '../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `DeleteAllUsersModal`,
  component: DeleteAllUsersModal,
};

const Template: Story<ComponentProps<typeof DeleteAllUsersModal>> = (args) => (
  <DeleteAllUsersModal {...args} />
);

export const DeleteAllUsersModalStory = Template.bind({});

DeleteAllUsersModalStory.args = {};
DeleteAllUsersModalStory.decorators = [ContainerDecorator];
