import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import NumberInput from '.';
import ContainerDecorator from '../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `NumberInput`,
  component: NumberInput,
};

const Template: Story<ComponentProps<typeof NumberInput>> = (args) => (
  <NumberInput {...args} />
);

export const NumberInputStory = Template.bind({});

NumberInputStory.args = {};
NumberInputStory.decorators = [ContainerDecorator];
