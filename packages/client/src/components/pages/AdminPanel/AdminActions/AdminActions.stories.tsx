import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import AdminActions from '.';
import ContainerDecorator from '../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `AdminActions`,
  component: AdminActions,
};

const Template: Story<ComponentProps<typeof AdminActions>> = (args) => (
  <AdminActions {...args} />
);

export const AdminActionsStory = Template.bind({});

AdminActionsStory.args = {};
AdminActionsStory.decorators = [ContainerDecorator];
