import { Box, Icon, Link, ListItem, useDisclosure } from '@chakra-ui/react';
import { NavLink as ReactRouterNavLink } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { Props } from './types';

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
  const {
    isOpen: isActive,
    onOpen: onActive,
    onClose: onInactive,
  } = useDisclosure();
  const dimensions = `8px`;
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
          borderColor: activeColor || `orange`,
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
        isActive={(match: any, _: any) => {
          if (!match) {
            onInactive();

            return false;
          }

          onActive();

          return true;
        }}
        {...withIconStyles}
      >
        {icon && <Icon display={`block`} as={icon} />}
        {text}
        <Box
          id={`activeLinkSpan`}
          height={dimensions}
          width={dimensions}
          borderRadius={`100vw`}
          as={`span`}
          backgroundColor={activeColor || `orange`}
          opacity={isActive ? 1 : 0}
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
