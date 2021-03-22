import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import SelectGroup from '.';
import ContainerDecorator from '../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `SelectGroup`,
  component: SelectGroup,
};

const Template: Story<ComponentProps<typeof SelectGroup>> = (args) => (
  <SelectGroup {...args} />
);

export const SelectGroupStory = Template.bind({});

SelectGroupStory.args = {};
SelectGroupStory.decorators = [ContainerDecorator];
