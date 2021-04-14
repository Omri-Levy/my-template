import { Fragment, FunctionComponent, memo } from 'react';
import {
  DarkMode,
  HStack,
  Icon,
  LightMode,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Color from 'color';
import { Props } from './types';
import useDarkMode from '../../../../../hooks/ui/useDarkMode';
import useIsTablet from '../../../../../hooks/responsiveness/useIsTablet';

/**
 * @description a simple dark mode switch made using Chakra-UI's HStack,
 * Icon and Switch components - toggles dark mode using Chakra-UI's
 * toggleColorMode/useColorMode in the onChange of the Switch.
 */
const DarkModeSwitch: FunctionComponent<Props> = ({ color, ...props }) => {
  const { toggleColorMode } = useColorMode();
  const { isDarkMode } = useDarkMode();
  const icon = isDarkMode ? FaMoon : FaSun;
  const isTablet = useIsTablet();
  const Mode = isTablet ? Fragment : isDarkMode ? LightMode : DarkMode;
  const purple = useColorModeValue(isTablet ? `#6B46C1` : `#D6BCFA`, `#808080`);
  const defaultColor = color
    ? Color(color).rgb().alpha(0.6)
    : Color(purple).rgb().alpha(0.6);
  const focusAndHover = {
    '.chakra-switch__track': {
      boxShadow: `0 0 0 3px ${defaultColor} !important`,
    },
  };

  return (
    <HStack spacing={3} alignItems={`center`} {...props}>
      <Icon as={icon} mb={`3.5px`} />
      <Mode>
        <Switch
          colorScheme={color || `purple`}
          onChange={toggleColorMode}
          isChecked={isDarkMode}
          _focusWithin={focusAndHover}
          _hover={focusAndHover}
        />
      </Mode>
    </HStack>
  );
};

export default memo(DarkModeSwitch);
