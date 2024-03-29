import { Box, Fade, Heading, Icon } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { Props } from './types';

/**
 * a simple component to wrap routes made using Chakra-UI's Box component
 * with the html "section" tag passed into the "as" prop and the Heading
 * component, with the "h1" html tag passed into the Heading "as" prop
 * giving a title to each route and an optional icon to the title.
 */
const Page: FunctionComponent<Props> = ({
  title,
  icon,
  iconProps,
  children,
  ...props
}) => (
  <Fade in>
    <Box as={`section`} pt={{ base: 10, md: 0 }} {...props}>
      <Heading as={`h1`} mb={5}>
        {icon && <Icon as={icon} mr={5} mb={2} {...iconProps} />}
        {title}
      </Heading>
      {children}
    </Box>
  </Fade>
);

export default Page;
