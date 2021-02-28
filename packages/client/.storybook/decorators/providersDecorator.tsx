import { ColorModeScript, CSSReset } from '@chakra-ui/react';
import Providers from '../../src/components/globals/Providers';
import { StoryFn } from './types';
import theme from '../../src/components/globals/Providers/theme';
import DarkModeSwitch
  from '../../src/components/globals/Layout/Header/DarkModeSwitch';
import React from 'react';

const providersDecorator = (Story: StoryFn) => (
  <Providers>
    <CSSReset />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <DarkModeSwitch />
    <Story />
  </Providers>
);

export default providersDecorator;
