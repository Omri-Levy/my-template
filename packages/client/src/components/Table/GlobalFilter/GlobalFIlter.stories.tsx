import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import GlobalFilter from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `GlobalFilter`,
  component: GlobalFilter,
};

const Template: Story<ComponentProps<typeof GlobalFilter>> = (args) => (
  <GlobalFilter {...args} />
);

export const GlobalFilterStory = Template.bind({});

GlobalFilterStory.args = {};
GlobalFilterStory.decorators = [ContainerDecorator];
