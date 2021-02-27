import { Flex, List, Stack } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import NavLink from './NavLink';
import useRoutes from '../../../hooks/useRoutes';
import useAuthentication from '../../../hooks/useAuthentication';

const Nav: FunctionComponent = () => {
  const routes = useRoutes();
  const { signOut } = useAuthentication(`signOut`);

  return (
    <Flex as={`nav`}>
      <Stack direction={`row`} as={List} listStyleType={`none`}>
        {routes.map((route) => {
          if (!route.to) {
            return null;
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
