import { Link, ListItem } from '@chakra-ui/react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { Props } from './types';
import useDarkMode from '../../../../../../hooks/useDarkMode';

/**
 * @description a reusable navigation link component with active link styling
 * made of Chakra-UI's ListItem, Link and, Text components with
 * react-router-dom's NavLink component passed to the link's "as" prop.
 */
const NavLink: FunctionComponent<Props> = ({ to, text, onClick, ...props }) => {
  const { darkModeColor } = useDarkMode();
  const expandPseudoAfterWidth = {
    transition: `width 240ms ease-in-out`,
    width: `100%`,
  };
  const activeLinkStyle = {
    transition: `width 240ms ease-in-out`,
    display: `block`,
    marginTop: `3px`,
    content: `""`,
    width: 0,
    height: 1,
    backgroundColor: darkModeColor,
  };

  return (
    <ListItem pl={5} _first={{ paddingLeft: 0 }} {...props}>
      <Link
        exact
        _focus={{
          outline: `none`,
        }}
        _activeLink={{
          _after: {
            ...expandPseudoAfterWidth,
          },
          _focus: {
            ...expandPseudoAfterWidth,
          },
        }}
        _after={{
          ...activeLinkStyle,
        }}
        as={ReactRouterNavLink}
        to={to}
        _hover={{
          _after: {
            ...expandPseudoAfterWidth,
          },
          textDecoration: `none`,
        }}
        onClick={onClick}
        fontWeight={700}
      >
        {text}
      </Link>
    </ListItem>
  );
};

export default NavLink;
