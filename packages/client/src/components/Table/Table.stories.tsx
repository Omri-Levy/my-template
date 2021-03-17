import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import Table from '.';
import ContainerDecorator from '../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `Table`,
  component: Table,
};

const Template: Story<ComponentProps<typeof Table>> = (args) => (
  <Table {...args} />
);

export const TableStory = Template.bind({});

TableStory.args = {};
TableStory.decorators = [ContainerDecorator];
