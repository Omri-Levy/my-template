import { Heading } from '@chakra-ui/react';
import React from 'react';
import { Props } from './types';

const Page: React.FunctionComponent<Props> = ({title, children}) =>  (
		<section>
			<Heading as={`h1`} mb={10}>{title}</Heading>
			{children}
		</section>
);

export default Page;
