import { HookReturns } from './types';
import useDarkMode from '../ui/useDarkMode';

/**
 * TODO: Update description
 */
const useColorModeShade: HookReturns = (color) => {
  const { isDarkMode } = useDarkMode();
  const shade = isDarkMode ? 600 : 200;
  const shadeInverted = isDarkMode ? 200 : 600;
  const colorModeShade = `${color}.${shade}`;
  const colorModeShadeInverted = `${color}.${shadeInverted}`;

  return {
    shade,
    shadeInverted,
    colorModeShade,
    colorModeShadeInverted,
  };
};

export default useColorModeShade;
