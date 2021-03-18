import { FunctionComponent, memo } from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { Props } from './types';

const PageCounter: FunctionComponent<Props> = ({ pageCount, pageIndex }) => {

	return (
		<Flex>
			<Heading as={`h3`} fontSize={`0.9rem`} pb={3} ml={`auto`}>
				Page
				{` `}
				{pageIndex + 1}
				{` `}
				out of
				{` `}
				{pageCount}
			</Heading>
		</Flex>
	);
};

export default memo(PageCounter);
