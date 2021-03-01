import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoryFn } from './types';

const RouterDecorator = (Story: StoryFn): StoryFnReactReturnType => (
  <Router>
    <Story />
  </Router>
);

export default RouterDecorator;
