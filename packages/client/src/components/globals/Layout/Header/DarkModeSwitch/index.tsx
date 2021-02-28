import { FunctionComponent } from 'react';
import { HStack, Icon, Switch, useColorMode } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import useDarkMode from '../../../../../hooks/useDarkMode';
import { Props } from './types';

const DarkModeSwitch: FunctionComponent<Props> = ({ props }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === `dark` ? FaMoon : FaSun;
  const { darkModeColor } = useDarkMode();

  return (
    <HStack spacing={3} alignItems={`center`} {...props}>
      <Icon as={icon} />
      <Switch onChange={toggleColorMode} colorScheme={darkModeColor} />
    </HStack>
  );
};

export default DarkModeSwitch;
