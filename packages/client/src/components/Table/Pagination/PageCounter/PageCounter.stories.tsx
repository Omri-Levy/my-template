import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import PageCounter from '.';
import ContainerDecorator from '../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `PageCounter`,
  component: PageCounter,
};

const Template: Story<ComponentProps<typeof PageCounter>> = (args) => (
  <PageCounter {...args} />
);

export const PageCounterStory = Template.bind({});

PageCounterStory.args = {};
PageCounterStory.decorators = [ContainerDecorator];
