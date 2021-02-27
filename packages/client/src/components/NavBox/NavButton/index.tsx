import { FunctionComponent } from 'react';
import { Button, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Props } from './types';

const NavButton: FunctionComponent<Props> = ({ to, text, ...props }) => (
  <ListItem>
    <Button as={NavLink} to={to} {...props}>
      {text}
    </Button>
  </ListItem>
);

export default NavButton;
