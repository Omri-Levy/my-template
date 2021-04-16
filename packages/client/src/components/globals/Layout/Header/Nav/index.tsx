import { Grid, List, Stack } from '@chakra-ui/react';
import { FunctionComponent, memo, useContext } from 'react';
import NavLink from './NavLink';
import useRoutes from '../../../../../hooks/ui/useRoutes';
import shouldSkipLink from './shouldSkipLink';
import useSignOut from '../../../../../hooks/api/useSignOut';
import AuthenticationContext from '../../../../../context/AuthenticationContext/AuthenticationContext';
import { Props } from './types';

const Nav: FunctionComponent<Props> = ({ toggleBurgerMenu, ...props }) => {
  const { memoizedRoutes } = useRoutes();
  const { signOut } = useSignOut();
  const { currentUser } = useContext(AuthenticationContext);
  const closeBurgerMenu = (to: string) => async () => {
    if (to === `/signOut`) {
      await signOut();
    }

    toggleBurgerMenu();
  };

  return (
    <Grid as={`nav`} flexGrow={1} placeContent={`center`} {...props}>
      <Stack
        direction={{ base: `column`, md: `row` }}
        as={List}
        listStyleType={`none`}
      >
        {memoizedRoutes.map((memoizedRoute) => {
          const { to, text, icon, exact } = memoizedRoute;
          const path = Array.isArray(to) ? to[0] : to;

          if (shouldSkipLink(to, currentUser)) {
            return null;
          }

          return (
            <NavLink
              exact={exact}
              key={path}
              to={path}
              icon={icon || undefined}
              text={text}
              onClick={closeBurgerMenu(to)}
            />
          );
        })}
      </Stack>
    </Grid>
  );
};

export default memo(Nav);
