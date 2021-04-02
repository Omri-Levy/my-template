import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import TableFooterController from '.';
import ContainerDecorator from '../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `TableFooterController`,
  component: TableFooterController,
};

const Template: Story<ComponentProps<typeof TableFooterController>> = (
  args
) => <TableFooterController {...args} />;

export const TableFooterControllerStory = Template.bind({});

TableFooterControllerStory.args = {};
TableFooterControllerStory.decorators = [ContainerDecorator];
