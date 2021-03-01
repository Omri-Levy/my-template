import { FunctionComponent } from 'react';
import { Button, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Props } from './types';
import useDarkMode from '../../../hooks/useDarkMode';

/**
 * a simple navigation button made using Chakra-UI's ListItem and Button
 * components with react-router-dom's NavLink component passed to the "as" prop
 * of the button - meant to be used with the NavBox component.
 */
const NavButton: FunctionComponent<Props> = ({ to, text, ...props }) => {
  const { darkModeScheme } = useDarkMode();

  return (
    <ListItem>
      <Button colorScheme={darkModeScheme} as={NavLink} to={to} {...props}>
        {text}
      </Button>
    </ListItem>
  );
};

export default NavButton;
