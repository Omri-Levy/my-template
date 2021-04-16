import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import IdleTimer from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `IdleTimer`,
  component: IdleTimer,
};

const Template: Story<ComponentProps<typeof IdleTimer>> = (args) => (
  <IdleTimer {...args} />
);

export const IdleTimerStory = Template.bind({});

IdleTimerStory.args = {};
IdleTimerStory.decorators = [ContainerDecorator];
