import { Flex, List, Stack } from '@chakra-ui/react';
import { FunctionComponent, useContext } from 'react';
import NavLink from './NavLink';
import useRoutes from '../../../../../hooks/useRoutes';
import useAuthentication from '../../../../../hooks/useAuthentication';
import AuthenticationContext from '../../../../../context/Authentication/AuthenticationContext';
import shouldSkipLink from './shouldSkipLink';

const Nav: FunctionComponent = () => {
  const { routes } = useRoutes();
  const { currentUser } = useContext(AuthenticationContext);
  const { signOut } = useAuthentication(`signOut`);

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

export default Nav;
