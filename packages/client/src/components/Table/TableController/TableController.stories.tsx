import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import TableController from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `TableController`,
  component: TableController,
};

const Template: Story<ComponentProps<typeof TableController>> = (args) => (
  <TableController {...args} />
);

export const TableControllerStory = Template.bind({});

TableControllerStory.args = {};
TableControllerStory.decorators = [ContainerDecorator];
