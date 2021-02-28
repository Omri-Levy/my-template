import { FunctionComponent } from 'react';
import { Button, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Props } from './types';
import useDarkMode from '../../../hooks/useDarkMode';

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
