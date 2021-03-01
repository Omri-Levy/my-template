import { ComponentProps } from 'react';

import { Story } from '@storybook/react';

import ForgotPasswordLink from '.';
import RouterDecorator from '../../../../utils/storybookDecorators/RouterDecorator';

export default {
  title: `ForgotPasswordLink`,
  component: ForgotPasswordLink,
};

const Template: Story<ComponentProps<typeof ForgotPasswordLink>> = (args) => (
  <ForgotPasswordLink {...args} />
);

export const ForgotPasswordLinkStory = Template.bind({});

ForgotPasswordLinkStory.args = {};
ForgotPasswordLinkStory.decorators = [RouterDecorator];
