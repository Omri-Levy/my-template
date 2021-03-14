import { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import Card from '.';
import ContainerDecorator from '../../utils/storybookDecorators/ContainerDecorator';

export default {
  title: `Card`,
  component: Card,
};

const Template: Story<ComponentProps<typeof Card>> = (args) => (
  <Card {...args}>
    <header>
      <h1> Test heading.. </h1>
      <p> still heading!</p>
    </header>
    <article>
      <h2>Test article heading..</h2>
      <p>Test paragraph...</p>
    </article>
  </Card>
);

export const CardStory = Template.bind({});

CardStory.args = {
  height: `600px`,
  width: `960px`,
};
CardStory.decorators = [ContainerDecorator];
