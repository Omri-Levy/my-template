import { FunctionComponent } from 'react';
import { BoxProps, List, Stack } from '@chakra-ui/react';
import Card from '../Card';

/**
 * an alternative navigation component made using Chakra-UI's Box component
 * with the "nav" html tag passed into the "as" prop and Stack component
 * with Chakra-UI's List component passed to the "as" prop - expects
 * NavButton for the children prop.
 */
const NavBox: FunctionComponent<BoxProps> = ({ children, ...props }) => (
  <Card color={`unset`} backgroundColor={`unset`} as={`nav`} {...props}>
    <Stack as={List} display={`grid`} placeContent={`center`} height={`100%`}>
      {children}
    </Stack>
  </Card>
);

export default NavBox;
