import { ColorModeScript, CSSReset } from '@chakra-ui/react';
import Providers from '../../src/components/globals/Providers';
import { StoryFn } from '../../src/utils/storybookDecorators/types';
import theme from '../../src/components/globals/Providers/theme';
import DarkModeSwitch
  from '../../src/components/globals/Layout/Header/DarkModeSwitch';
import React from 'react';

const ProvidersDecorator = (Story: StoryFn) => (
  <Providers>
    <CSSReset />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <DarkModeSwitch />
    <Story />
  </Providers>
);

export default ProvidersDecorator;
