import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import InputGroup from '.';
import ContainerDecorator
  from '../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `InputGroup`,
  component: InputGroup,
};

const Template: Story<ComponentProps<typeof InputGroup>> = (args) => (
  <InputGroup {...args} />
);

export const InputGroupStory = Template.bind({});

InputGroupStory.args = {};
InputGroupStory.decorators = [ContainerDecorator];
