import { useMemo, useContext } from 'react';
import { HookReturns } from './types';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';
import authenticatedRoutes from './authenticatedRoutes';
import unauthenticatedRoutes from './unAuthenticatedRoutes';

const useRoutes: HookReturns = () => {
  const { currentUser } = useContext(AuthenticationContext);

  return useMemo(
    () => (currentUser ? authenticatedRoutes : unauthenticatedRoutes),
    [currentUser]
  );
};

export default useRoutes;
