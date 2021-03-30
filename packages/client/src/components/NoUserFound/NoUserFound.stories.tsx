import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import NoUserFound from '.';
import ContainerDecorator from '../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `NoUserFound`,
  component: NoUserFound,
};

const Template: Story<ComponentProps<typeof NoUserFound>> = (args) => (
  <NoUserFound {...args} />
);

export const NoUserFoundStory = Template.bind({});

NoUserFoundStory.args = {};
NoUserFoundStory.decorators = [ContainerDecorator];
