import { Box, Heading } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Props } from './types';

/**
 * a simple component to wrap routes made using Chakra-UI's Box component
 * with the html "section" tag passed into the "as" prop and, the Heading
 * component, with the "h1" html tag passed into the Heading "as" prop
 * giving a title to each route.
 */
const Page: FunctionComponent<Props> = ({ title, children, ...props }) => (
  <Box as={`section`} {...props} height={`100%`}>
    <Heading as={`h1`} mb={10}>
      {title}
    </Heading>
    {children}
  </Box>
);

export default Page;
