import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import TableFooterInstance from '.';
import ContainerDecorator from '../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `TableFooterInstance`,
  component: TableFooterInstance,
};

const Template: Story<ComponentProps<typeof TableFooterInstance>> = (args) => (
  <TableFooterInstance {...args} />
);

export const TableFooterInstanceStory = Template.bind({});

TableFooterInstanceStory.args = {};
TableFooterInstanceStory.decorators = [ContainerDecorator];
