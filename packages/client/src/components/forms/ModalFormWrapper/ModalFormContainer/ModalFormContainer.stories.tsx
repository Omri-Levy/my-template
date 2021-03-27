import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import ModalFormContainer from '.';
import ContainerDecorator from '../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `ModalFormContainer`,
  component: ModalFormContainer,
};

const Template: Story<ComponentProps<typeof ModalFormContainer>> = (args) => (
  <ModalFormContainer {...args} />
);

export const ModalFormContainerStory = Template.bind({});

ModalFormContainerStory.args = {};
ModalFormContainerStory.decorators = [ContainerDecorator];
