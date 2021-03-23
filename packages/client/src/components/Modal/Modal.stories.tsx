import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import Modal from '.';
import ContainerDecorator from '../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `Modal`,
  component: Modal,
};

const Template: Story<ComponentProps<typeof Modal>> = (args) => (
  <Modal {...args} />
);

export const ModalStory = Template.bind({});

ModalStory.args = {};
ModalStory.decorators = [ContainerDecorator];
