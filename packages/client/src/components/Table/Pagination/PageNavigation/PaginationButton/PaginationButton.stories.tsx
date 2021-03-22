import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import PaginationButton from '.';
import ContainerDecorator from '../../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `PaginationButton`,
  component: PaginationButton,
};

const Template: Story<ComponentProps<typeof PaginationButton>> = (args) => (
  <PaginationButton {...args} />
);

export const PaginationButtonStory = Template.bind({});

PaginationButtonStory.args = {};
PaginationButtonStory.decorators = [ContainerDecorator];
