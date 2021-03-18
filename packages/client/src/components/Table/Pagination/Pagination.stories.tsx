import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import Pagination from './index';
import ContainerDecorator
  from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `Pagination`,
  component: Pagination
};

const Template: Story<ComponentProps<typeof Pagination>> = (args) => (
  <Pagination {...args} />
);

export const PaginationStory = Template.bind({});

PaginationStory.args = {
  rowsLength: 10,
};
PaginationStory.decorators = [ContainerDecorator];
