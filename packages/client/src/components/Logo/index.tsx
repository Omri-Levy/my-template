import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const Logo: React.FunctionComponent = () => {
	return (
		<Box pr={5}>
			<Heading as={`h1`} size={`md`}>My Template</Heading>
		</Box>
	);
};

export default Logo;
