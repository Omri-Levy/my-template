import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import ModalForm from '.';
import ContainerDecorator from '../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `ModalForm`,
  component: ModalForm,
};

const Template: Story<ComponentProps<typeof ModalForm>> = (args) => (
  <ModalForm {...args} />
);

export const ModalFormStory = Template.bind({});

ModalFormStory.args = {};
ModalFormStory.decorators = [ContainerDecorator];
