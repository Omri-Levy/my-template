import { Flex, List, Stack } from '@chakra-ui/react';
import { FunctionComponent, useContext } from 'react';
import NavLink from './NavLink';
import useRoutes from '../../../../../hooks/useRoutes';
import useAuthentication from '../../../../../hooks/useAuthentication';
import AuthenticationContext from '../../../../../context/Authentication/AuthenticationContext';

const Nav: FunctionComponent = () => {
  const routes = useRoutes();
  const { currentUser } = useContext(AuthenticationContext);
  const { signOut } = useAuthentication(`signOut`);

  return (
    <Flex as={`nav`} alignItems={`center`}>
      <Stack direction={`row`} as={List} listStyleType={`none`}>
        {routes.map((route) => {
          const { to, text, icon } = route;

          if (!to || to === `/forgotPassword` || !currentUser) {
            return null;
          }

          return (
            <NavLink
              key={to}
              to={to}
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
