import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import TabsData from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `TabsData`,
  component: TabsData,
};

const Template: Story<ComponentProps<typeof TabsData>> = (args) => (
  <TabsData {...args} />
);

export const TabsDataStory = Template.bind({});

TabsDataStory.args = {};
TabsDataStory.decorators = [ContainerDecorator];
