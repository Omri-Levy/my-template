import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { StoryFn } from './types';
import Container from '../../components/globals/Layout/Container';

const ContainerDecorator = (Story: StoryFn): StoryFnReactReturnType => (
  <Container>
    <Story />
  </Container>
);

export default ContainerDecorator;
