import { FunctionComponent } from 'react';
import { Button, ListItem, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Props } from './types';
import useDarkMode from '../../../hooks/useDarkMode';

/**
 * a simple navigation button made using Chakra-UI's ListItem, Button with
 * react-router-dom's NavLink component passed to the "as" prop and, Text
 * components - meant to be used with the NavBox component.
 */
const NavButton: FunctionComponent<Props> = ({ to, text, ...props }) => {
  const { darkModeScheme } = useDarkMode();

  return (
    <ListItem>
      <Button colorScheme={darkModeScheme} as={NavLink} to={to} {...props}>
        <Text>{text}</Text>
      </Button>
    </ListItem>
  );
};

export default NavButton;
