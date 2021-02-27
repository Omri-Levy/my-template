import { FunctionComponent } from 'react';
import { Flex } from '@chakra-ui/react';
import Nav from './Nav';
import Logo from '../Logo';

const Header: FunctionComponent = () => (
  <Flex justifyContent={`space-between`} as={`header`} p={5}>
    <Logo />
    <Nav />
  </Flex>
);
export default Header;
