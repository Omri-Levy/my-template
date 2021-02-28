import { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import Logo from './index';
import ContainerDecorator from '../../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `Logo`,
  component: Logo,
};

const Template: Story<ComponentProps<typeof Logo>> = (args) => (
  <Logo {...args} />
);

export const LogoStory = Template.bind({});

LogoStory.args = {};
LogoStory.decorators = [ContainerDecorator];
