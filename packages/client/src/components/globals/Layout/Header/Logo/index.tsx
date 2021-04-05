import { Box, Heading, Icon } from '@chakra-ui/react';
import { FunctionComponent, memo } from 'react';
import { Props } from './types';

/**
 * a simple brand component to be used in places such as header - made of
 * Chakra-UI's Box and Heading components, with the "h1" html tag passed to
 * the Heading's "as" prop and an optional icon.
 */
const Logo: FunctionComponent<Props> = ({
  text,
  icon,
  iconProps,
  ...props
}) => (
  <Box {...props}>
    <Heading as={`h1`} size={`md`}>
      {icon && <Icon as={icon} {...iconProps} />}
      {text}
    </Heading>
  </Box>
);

export default memo(Logo);
