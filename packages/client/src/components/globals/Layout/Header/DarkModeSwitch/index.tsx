import { Fragment, FunctionComponent, memo } from 'react';
import {
  DarkMode,
  HStack,
  Icon,
  LightMode,
  Switch,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Props } from './types';
import useDarkMode from '../../../../../hooks/ui/useDarkMode';

/**
 * @description a simple dark mode switch made using Chakra-UI's HStack,
 * Icon and Switch components - toggles dark mode using Chakra-UI's
 * toggleColorMode/useColorMode in the onChange of the Switch.
 */
const DarkModeSwitch: FunctionComponent<Props> = ({ color, ...props }) => {
  const { toggleColorMode } = useColorMode();
  const { isDarkMode } = useDarkMode();
  const icon = isDarkMode ? FaMoon : FaSun;
  const isMobile = useBreakpointValue({ base: true, sm: false });
  const Mode = isMobile ? Fragment : isDarkMode ? LightMode : DarkMode;

  return (
    <HStack spacing={3} alignItems={`center`} {...props}>
      <Icon as={icon} mb={`3.5px`} />
      <Mode>
        <Switch
          colorScheme={color || `purple`}
          onChange={toggleColorMode}
          isChecked={isDarkMode}
        />
      </Mode>
    </HStack>
  );
};

export default memo(DarkModeSwitch);
