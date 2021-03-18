import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import GoToPage from '.';
import ContainerDecorator
  from '../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `GoToPage`,
  component: GoToPage,
};

const Template: Story<ComponentProps<typeof GoToPage>> = (args) => (
  <GoToPage {...args} />
);

export const GoToPageStory = Template.bind({});

GoToPageStory.args = {};
GoToPageStory.decorators = [ContainerDecorator];
