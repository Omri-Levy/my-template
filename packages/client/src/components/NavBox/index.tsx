import { FunctionComponent } from 'react';
import { Box, BoxProps, List, Stack } from '@chakra-ui/react';

const NavBox: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <Box as={`nav`}>
    <Stack as={List} display={`grid`} placeContent={`center`} {...props}>
      {children}
    </Stack>
  </Box>
);

export default NavBox;
