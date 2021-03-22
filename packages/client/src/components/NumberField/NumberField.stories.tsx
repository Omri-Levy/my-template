import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import NumberField from '.';
import ContainerDecorator from '../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `NumberField`,
  component: NumberField,
};

const Template: Story<ComponentProps<typeof NumberField>> = (args) => (
  <NumberField {...args} />
);

export const NumberFieldStory = Template.bind({});

NumberFieldStory.args = {};
NumberFieldStory.decorators = [ContainerDecorator];
