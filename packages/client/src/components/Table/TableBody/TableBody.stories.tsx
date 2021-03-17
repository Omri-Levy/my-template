import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import TableBody from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `TableBody`,
  component: TableBody,
};

const Template: Story<ComponentProps<typeof TableBody>> = (args) => (
  <TableBody {...args} />
);

export const TableBodyStory = Template.bind({});

TableBodyStory.args = {};
TableBodyStory.decorators = [ContainerDecorator];
