import { StoryFn } from './types';
import React from 'react';
import Container from '../../src/components/globals/Layout/Container';

const containerDecorator = (Story: StoryFn) => (
  <Container>
    <Story />
  </Container>
);

export default containerDecorator;
