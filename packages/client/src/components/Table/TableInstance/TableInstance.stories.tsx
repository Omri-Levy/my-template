import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import TableInstance from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `TableInstance`,
  component: TableInstance,
};

const Template: Story<ComponentProps<typeof TableInstance>> = (args) => (
  <TableInstance {...args} />
);

export const TableInstanceStory = Template.bind({});

TableInstanceStory.args = {};
TableInstanceStory.decorators = [ContainerDecorator];
