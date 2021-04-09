import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import DataTabs from '.';
import ContainerDecorator from '../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `DataTabs`,
  component: DataTabs,
};

const Template: Story<ComponentProps<typeof DataTabs>> = (args) => (
  <DataTabs {...args} />
);

export const DataTabsStory = Template.bind({});

DataTabsStory.args = {};
DataTabsStory.decorators = [ContainerDecorator];
