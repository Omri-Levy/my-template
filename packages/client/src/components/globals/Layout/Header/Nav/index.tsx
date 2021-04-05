import { Grid, List, Stack } from '@chakra-ui/react';
import { FunctionComponent, memo, useContext } from 'react';
import NavLink from './NavLink';
import useRoutes from '../../../../../hooks/ui/useRoutes';
import shouldSkipLink from './shouldSkipLink';
import useSignOut from '../../../../../hooks/api/useSignOut';
import AuthenticationContext from '../../../../../context/AuthenticationContext/AuthenticationContext';
import useDarkMode from '../../../../../hooks/ui/useDarkMode';

const Nav: FunctionComponent = () => {
  const { memoizedRoutes } = useRoutes();
  const signOut = useSignOut();
  const { currentUser } = useContext(AuthenticationContext);
  const { darkModeColor } = useDarkMode();

  return (
    <Grid as={`nav`} flexGrow={1} placeContent={`center`}>
      <Stack
        direction={`row`}
        as={List}
        listStyleType={`none`}
        backgroundColor={darkModeColor}
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
              onClick={to === `/signOut` ? signOut : undefined}
            />
          );
        })}
      </Stack>
    </Grid>
  );
};

export default memo(Nav);
