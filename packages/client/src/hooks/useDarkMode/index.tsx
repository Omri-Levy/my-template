import { useColorMode } from '@chakra-ui/react';
import { HookReturns } from './types';

/**
 * a hook returning various dark mode related reusable logic - such as
 * colors to use, inverted colors and a boolean returning the current mode
 * using Chakra-UI's colorMode/useColorMode.
 */
const useDarkMode: HookReturns = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === `dark`;
  const darkModeColor = isDarkMode ? `gray.50` : `gray.900`;
  const darkModeColorInverted = isDarkMode ? `gray.900` : `gray.50`;
  const darkModeColorOrDefault = isDarkMode ? `gray.50` : undefined;
  const darkModeColorOrDefaultInverted = isDarkMode ? `gray.900` : undefined;
  const darkModeScheme = isDarkMode ? `blackAlpha` : `whiteAlpha`;

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
