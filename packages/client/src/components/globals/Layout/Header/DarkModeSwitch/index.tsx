import { FunctionComponent, memo } from 'react';
import {
  DarkMode,
  HStack,
  Icon,
  LightMode,
  Switch,
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
const DarkModeSwitch: FunctionComponent<Props> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === `dark` ? FaMoon : FaSun;
  const { isDarkMode } = useDarkMode();
  const Mode = isDarkMode ? LightMode : DarkMode;

  return (
    <HStack spacing={3} alignItems={`center`} {...props}>
      <Mode>
        <Icon as={icon} mb={`3.5px`} />
        <Switch onChange={toggleColorMode} />
      </Mode>
    </HStack>
  );
};

export default memo(DarkModeSwitch);
