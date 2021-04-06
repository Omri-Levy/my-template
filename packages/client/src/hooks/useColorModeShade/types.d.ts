import { ChakraColorScheme } from '../../utils/types';

type HookReturns = (
  color: ChakraColorScheme
) => {
  /**
   * returns chakra ui's shade of 600 as a number.
   */
  shade: number;
  /**
   * returns chakra ui's shade of 200 as a number.
   */
  shadeInverted: number;
  /**
   * returns the passed in color with the chakra ui's shade of 600 as a string.
   */
  colorModeShade: string;
  /**
   * returns the passed in color with the chakra ui's shade of 200 as a string.
   */
  colorModeShadeInverted: string;
};

export { HookReturns };
