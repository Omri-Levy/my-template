import { useContext, useMemo } from 'react';
import { HookReturns } from './types';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';
import authenticatedRoutes from './authenticatedRoutes';
import unauthenticatedRoutes from './unAuthenticatedRoutes';

/**
 * returns a memoized version of the app's routes array based on if the user
 * is currently authenticated/signed in.
 */
const useRoutes: HookReturns = () => {
  const { currentUser } = useContext(AuthenticationContext);
  const isAuthenticated = currentUser && currentUser !== `unauthenticated`;

  return useMemo(
    () => (isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes),
    [isAuthenticated]
  );
};

export default useRoutes;
