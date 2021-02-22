import { Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Props } from './types';

const Page: FunctionComponent<Props> = ({title, children}) =>  (
		<section>
			<Heading as={`h1`} mb={10}>{title}</Heading>
			{children}
		</section>
);

export default Page;
