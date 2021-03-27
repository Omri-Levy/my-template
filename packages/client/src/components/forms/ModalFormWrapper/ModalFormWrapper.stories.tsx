import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import ModalFormWrapper from '.';
import ContainerDecorator from '../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `ModalFormWrapper`,
  component: ModalFormWrapper,
};

const Template: Story<ComponentProps<typeof ModalFormWrapper>> = (args) => (
  <ModalFormWrapper {...args} />
);

export const ModalFormWrapperStory = Template.bind({});

ModalFormWrapperStory.args = {};
ModalFormWrapperStory.decorators = [ContainerDecorator];
