import { Flex, List, Stack } from '@chakra-ui/react';
import { FunctionComponent, memo, useContext } from 'react';
import NavLink from './NavLink';
import useRoutes from '../../../../../hooks/ui/useRoutes';
import shouldSkipLink from './shouldSkipLink';
import useSignOut from '../../../../../hooks/api/useSignOut';
import AuthenticationContext from '../../../../../context/AuthenticationContext/AuthenticationContext';

const Nav: FunctionComponent = () => {
  const { routes } = useRoutes();
  const signOut = useSignOut();
  const { currentUser } = useContext(AuthenticationContext);

  return (
    <Flex as={`nav`} alignItems={`center`}>
      <Stack direction={`row`} as={List} listStyleType={`none`}>
        {routes.map((route) => {
          const { to, text, icon, exact } = route;
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
    </Flex>
  );
};

export default memo(Nav);
