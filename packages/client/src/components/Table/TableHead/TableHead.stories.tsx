import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import TableHead from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `TableHead`,
  component: TableHead,
};

const Template: Story<ComponentProps<typeof TableHead>> = (args) => (
  <TableHead {...args} />
);

export const TableHeadStory = Template.bind({});

TableHeadStory.args = {};
TableHeadStory.decorators = [ContainerDecorator];
