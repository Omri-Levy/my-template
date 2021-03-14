import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { HookReturns } from './types';

/**
 * a hook returning various dark mode related reusable logic - such as
 * colors to use, inverted colors and a boolean returning the current mode
 * using Chakra-UI's colorMode/useColorMode.
 */
const useDarkMode: HookReturns = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === `dark`;
  const darkModeColor = useColorModeValue(`gray.800`, `white`);
  const darkModeColorInverted = useColorModeValue(`white`, `gray.800`);
  const darkModeColorOrDefault = useColorModeValue(undefined, `white`);
  const darkModeColorOrDefaultInverted = useColorModeValue(
    `gray.800`,
    undefined
  );
  const darkModeScheme = useColorModeValue(`whiteAlpha`, `blackAlpha`);

  return {
    isDarkMode,
    darkModeColor,
    darkModeColorInverted,
    darkModeColorOrDefault,
    darkModeColorOrDefaultInverted,
    darkModeScheme,
  };
};

export default useDarkMode;
