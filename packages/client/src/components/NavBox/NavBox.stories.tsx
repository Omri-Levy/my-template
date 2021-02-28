import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import NavBox from '.';
import containerDecorator from '../../../.storybook/decorators/containerDecorator';

export default {
  title: `NavBox`,
  component: NavBox,
};

const Template: Story<ComponentProps<typeof NavBox>> = (args) => (
  <NavBox {...args} />
);

export const NavBoxStory = Template.bind({});

NavBoxStory.args = {
  borderRadius: 5,
  height: `300px`,
  mb: 300,
};
NavBoxStory.decorators = [containerDecorator];
