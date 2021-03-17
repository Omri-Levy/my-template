import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import FilterInput from '.';
import ContainerDecorator
  from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `FilterInput`,
  component: FilterInput
};

const Template: Story<ComponentProps<typeof FilterInput>> = (args) => (
  <FilterInput {...args} />
);

export const FilterInputStory = Template.bind({});

FilterInputStory.args = {};
FilterInputStory.decorators = [ContainerDecorator];
