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
  const staticDarkColor = `gray.800`;
  const staticLightColor = `white`;
  const darkModeTextColor = useColorModeValue(`black`, `white`);
  const darkModeTextColorInverted = useColorModeValue(`white`, `black`);

  return {
    isDarkMode,
    darkModeColor,
    darkModeColorInverted,
    darkModeColorOrDefault,
    darkModeColorOrDefaultInverted,
    staticDarkColor,
    staticLightColor,
    darkModeTextColor,
    darkModeTextColorInverted,
  };
};

export default useDarkMode;
