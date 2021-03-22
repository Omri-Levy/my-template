import { useContext, useMemo } from 'react';
import { HookReturns, Routes } from './types';
import { authenticatedRoutes } from './authenticatedRoutes';
import { unauthenticatedRoutes } from './unauthenticatedRoutes';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import AuthorizationContext from '../../../context/AuthorizationContext/AuthorizationContext';
import { adminRoutes } from './adminRoutes';

/**
 * returns a memoized version of the app's routes array based on if the user
 * is currently authenticated/signed in and memoized string arrays of both the
 * unauthenticated and authenticated routes endpoints.
 */
const useRoutes: HookReturns = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const { isAuthorized } = useContext(AuthorizationContext);
  const memoizedUnauthenticatedRoutes = useMemo(
    () => unauthenticatedRoutes,
    []
  );
  const memoizedAuthenticatedRoutes = useMemo(() => authenticatedRoutes, []);
  const memoizedAdminRoutes = useMemo(() => adminRoutes, []);
  let memoizedRoutes: Routes = memoizedUnauthenticatedRoutes;

  if (isAuthenticated && isAuthorized) {
    memoizedRoutes = memoizedAdminRoutes;
  } else if (isAuthenticated && !isAuthorized) {
    memoizedRoutes = memoizedAuthenticatedRoutes;
  } else {
    memoizedRoutes = memoizedUnauthenticatedRoutes;
  }

  return {
    memoizedRoutes,
  };
};

export default useRoutes;
