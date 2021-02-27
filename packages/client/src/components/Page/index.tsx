import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Props } from './types';

const Page: FunctionComponent<Props> = ({ title, children, ...props }) => (
  <Box as={`section`} {...props} height={`100%`}>
    <Heading as={`h1`} mb={10}>
      {title}
    </Heading>
    {children}
  </Box>
);

export default Page;
