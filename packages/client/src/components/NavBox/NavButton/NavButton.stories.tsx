import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Link } from '@storybook/router';
import NavButton from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';
import NavBox from '../index';

export default {
  title: `NavButton`,
  component: NavButton,
};

const Template: Story<ComponentProps<typeof NavButton>> = (args) => (
  <NavBox height={`300px`}>
    <NavButton as={Link} {...args} />
  </NavBox>
);

export const NavButtonStory = Template.bind({});

NavButtonStory.args = {
  to: `/`,
  text: `Test`,
};
NavButtonStory.decorators = [ContainerDecorator];
