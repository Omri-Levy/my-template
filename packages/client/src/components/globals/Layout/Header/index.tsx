import { FunctionComponent, memo } from 'react';
import { Flex } from '@chakra-ui/react';
import Nav from './Nav';
import Logo from './Logo';
import DarkModeSwitch from './DarkModeSwitch';
import useDarkMode from '../../../../hooks/ui/useDarkMode';

/**
 * a simple header component made using Chakra-UI's Flex component with the
 * html "header" tag passed to the "as" prop, wrapping the Nav, Logo and
 * DarkModeSwitch.
 */
const Header: FunctionComponent = () => {
  const { darkModeColor, darkModeColorInverted } = useDarkMode();

  return (
    <Flex
      as={`header`}
      backgroundColor={darkModeColor}
      color={darkModeColorInverted}
      p={5}
      mb={20}
      alignItems={`center`}
    >
      <Flex flexDirection={`column`}>
        <Logo text={`My Template`} />
        <DarkModeSwitch mt={5} mr={`auto`} />
      </Flex>
      <Nav />
    </Flex>
  );
};
export default memo(Header);
