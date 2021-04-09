import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import ColumnsTabs from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `ColumnsTabs`,
  component: ColumnsTabs,
};

const Template: Story<ComponentProps<typeof ColumnsTabs>> = (args) => (
  <ColumnsTabs {...args} />
);

export const ColumnsTabsStory = Template.bind({});

ColumnsTabsStory.args = {};
ColumnsTabsStory.decorators = [ContainerDecorator];
