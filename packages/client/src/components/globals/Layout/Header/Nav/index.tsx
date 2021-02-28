import { Flex, List, Stack } from '@chakra-ui/react';
import { FunctionComponent, useContext } from 'react';
import NavLink from './NavLink';
import useRoutes from '../../../../../hooks/useRoutes';
import useAuthentication from '../../../../../hooks/useAuthentication';
import Loading from '../../../Loading';
import AuthenticationContext from '../../../../../context/Authentication/AuthenticationContext';

const Nav: FunctionComponent = () => {
  const routes = useRoutes();
  const { currentUser } = useContext(AuthenticationContext);
  const { signOut } = useAuthentication(`signOut`);

  return (
    <Flex as={`nav`}>
      <Stack direction={`row`} as={List} listStyleType={`none`}>
        {routes.map((route) => {
          if (!route.to) {
            return null;
          }

          if (!currentUser) {
            return <Loading />;
          }

          return (
            <NavLink
              key={route.to}
              to={route.to}
              text={route.text}
              onClick={route.to === `/signOut` ? signOut : undefined}
            />
          );
        })}
      </Stack>
    </Flex>
  );
};
export default Nav;
