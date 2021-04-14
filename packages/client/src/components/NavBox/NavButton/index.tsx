import { FunctionComponent } from 'react';
import { Button, Flex, Icon, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Props } from './types';
import useDarkMode from '../../../hooks/ui/useDarkMode';
import useColorModeShade from '../../../hooks/ui/useColorModeShade';

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
  activeColor,
  ...props
}) => {
  const { darkModeTextColorInverted, darkModeColor } = useDarkMode();
  const { colorModeShadeInverted } = useColorModeShade(activeColor || `purple`);

  return (
    <ListItem>
      <Button
        as={NavLink}
        to={to}
        backgroundColor={darkModeColor}
        color={darkModeTextColorInverted}
        _hover={{
          backgroundColor: colorModeShadeInverted,
        }}
        {...props}
      >
        <Flex>
          {text}
          {icon && <Icon as={icon} ml={3} mt={0.5} {...iconProps} />}
        </Flex>
      </Button>
    </ListItem>
  );
};

export default NavButton;
