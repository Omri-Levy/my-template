import React from 'react';
import Nav from './Nav';
import Logo from '../Logo';
import { Flex } from '@chakra-ui/react';

const Header: React.FunctionComponent = () => {
	return (
		<Flex justifyContent={`space-between`} as={`header`} p={5}>
			<Logo/>
			<Nav/>
		</Flex>
	);
};
export default Header;
