import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import PageNavigation from '.';
import ContainerDecorator
  from '../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `PageNavigation`,
  component: PageNavigation,
};

const Template: Story<ComponentProps<typeof PageNavigation>> = (args) => (
  <PageNavigation {...args} />
);

export const PageNavigationStory = Template.bind({});

PageNavigationStory.args = {};
PageNavigationStory.decorators = [ContainerDecorator];
