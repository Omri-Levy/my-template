import { Box, Icon, Link, ListItem } from '@chakra-ui/react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { Props } from './types';
import useColorModeShade from '../../../../../../hooks/useColorModeShade';

/**
 * @description a reusable navigation link component with active link styling
 * made of Chakra-UI's ListItem and  Link components and an optional Icon -
 * with react-router-dom's NavLink component passed to the link's "as" prop.
 */
const NavLink: FunctionComponent<Props> = ({
  to,
  text,
  onClick,
  icon,
  exact,
  activeColor,
  ...props
}) => {
  const { colorModeShade } = useColorModeShade(activeColor || `purple`);

  // styles to apply only when an icon is passed in.
  let withIconStyles = {};

  if (icon) {
    withIconStyles = {
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
    };
  }

  return (
    <ListItem pl={5} _first={{ paddingLeft: 0 }} minWidth={`70px`} {...props}>
      <Link
        display={`flex`}
        exact={exact}
        p={`5px`}
        border={`2px solid transparent`}
        _focus={{
          outline: `none`,
        }}
        _focusVisible={{
          borderColor: colorModeShade,
          borderRadius: `18px`,
        }}
        as={ReactRouterNavLink}
        to={to}
        _hover={{
          textDecoration: `none`,
          '#activeLinkSpan': {
            opacity: 1,
          },
        }}
        onClick={onClick}
        fontWeight={700}
        _activeLink={{
          '#activeLinkSpan': {
            opacity: 1,
          },
        }}
        {...withIconStyles}
      >
        {icon && <Icon display={`block`} as={icon} />}
        {text}
        <Box
          id={`activeLinkSpan`}
          height={`6px`}
          width={`40px`}
          borderRadius={`3px`}
          as={`span`}
          backgroundColor={colorModeShade}
          opacity={0}
          transition={`opacity 300ms ease-in`}
          role={`presentation`}
          aria-label={`active-link-indicator`}
          pointerEvents={`none`}
        />
      </Link>
    </ListItem>
  );
};

export default NavLink;
