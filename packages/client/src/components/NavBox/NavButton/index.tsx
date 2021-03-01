import { FunctionComponent } from 'react';
import { Button, Flex, Icon, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Props } from './types';
import useDarkMode from '../../../hooks/useDarkMode';

/**
 * a simple navigation button made using Chakra-UI's ListItem and Button
 * components with react-router-dom's NavLink component passed to the "as" prop
 * of the button, with an optional icon - meant to be used with the NavBox
 * component.
 */
const NavButton: FunctionComponent<Props> = ({
  to,
  text,
  icon,
  iconProps,
  ...props
}) => {
  const { darkModeScheme } = useDarkMode();

  return (
    <ListItem>
      <Button colorScheme={darkModeScheme} as={NavLink} to={to} {...props}>
        <Flex>
          {text}
          {icon && <Icon as={icon} ml={3} mt={0.5} {...iconProps} />}
        </Flex>
      </Button>
    </ListItem>
  );
};

export default NavButton;
