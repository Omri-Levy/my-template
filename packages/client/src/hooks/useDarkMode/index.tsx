import { useColorMode } from '@chakra-ui/react';
import { HookReturns } from './types';

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
