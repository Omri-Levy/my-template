import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import RowsPerPage from '.';
import ContainerDecorator
  from '../../../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `RowsPerPage`,
  component: RowsPerPage,
};

const Template: Story<ComponentProps<typeof RowsPerPage>> = (args) => (
  <RowsPerPage {...args} />
);

export const RowsPerPageStory = Template.bind({});

RowsPerPageStory.args = {};
RowsPerPageStory.decorators = [ContainerDecorator];
