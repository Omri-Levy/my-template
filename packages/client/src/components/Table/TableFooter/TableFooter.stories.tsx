import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import TableFooter from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `TableFooter`,
  component: TableFooter,
};

const Template: Story<ComponentProps<typeof TableFooter>> = (args) => (
  <TableFooter {...args} />
);

export const TableFooterStory = Template.bind({});

TableFooterStory.args = {};
TableFooterStory.decorators = [ContainerDecorator];
