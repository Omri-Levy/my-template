import { useContext, useMemo } from 'react';
import { HookReturns } from './types';
import AuthenticationContext from '../../context/AuthenticationContext/AuthenticationContext';
import {
  authenticatedEndpoints,
  authenticatedRoutes,
} from './authenticatedRoutes';
import {
  unauthenticatedEndpoints,
  unauthenticatedRoutes,
} from './unauthenticatedRoutes';

/**
 * returns a memoized version of the app's routes array based on if the user
 * is currently authenticated/signed in and memoized string arrays of both the
 * unauthenticated and authenticated routes endpoints.
 */
const useRoutes: HookReturns = () => {
  const { currentUser } = useContext(AuthenticationContext);
  const isAuthenticated = currentUser && currentUser !== `unauthenticated`;
  const unprotectedRoutes = useMemo(() => unauthenticatedRoutes, []);
  const unprotectedEndpoints = useMemo(() => unauthenticatedEndpoints, []);
  const protectedRoutes = useMemo(() => authenticatedRoutes, []);
  const protectedEndpoints = useMemo(() => authenticatedEndpoints, []);
  const routes = useMemo(
    () => (isAuthenticated ? authenticatedRoutes : unauthenticatedRoutes),
    [isAuthenticated]
  );

  return {
    routes,
    unprotectedRoutes,
    unprotectedEndpoints,
    protectedRoutes,
    protectedEndpoints,
  };
};

export default useRoutes;
