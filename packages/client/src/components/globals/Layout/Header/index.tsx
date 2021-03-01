import { FunctionComponent } from 'react';
import { Flex } from '@chakra-ui/react';
import Nav from './Nav';
import Logo from './Logo';
import DarkModeSwitch from './DarkModeSwitch';

const Header: FunctionComponent = () => (
  <Flex justifyContent={`space-between`} as={`header`} p={5}>
    <Flex alignItems={`center`} mb={8}>
      <Logo text={`My Template`} />
      <DarkModeSwitch mt={2} />
    </Flex>
    <Nav />
  </Flex>
);
export default Header;
