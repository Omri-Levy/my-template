import { useContext, useMemo } from 'react';
import { HookReturns, Routes } from './types';
import {
  authenticatedEndpoints,
  authenticatedRoutes,
} from './authenticatedRoutes';
import {
  unauthenticatedEndpoints,
  unauthenticatedRoutes,
} from './unauthenticatedRoutes';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import AuthorizationContext from '../../../context/AuthorizationContext/AuthorizationContext';
import { adminEndpoints, adminRoutes } from './adminRoutes';

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
  const memoizedUnauthenticatedEndpoints = useMemo(
    () => unauthenticatedEndpoints,
    []
  );
  const memoizedAuthenticatedEndpoints = useMemo(
    () => authenticatedEndpoints,
    []
  );
  const memoizedAdminEndpoints = useMemo(() => adminEndpoints, []);
  let memoizedRoutes: Routes = memoizedUnauthenticatedRoutes;

  if (isAuthenticated && isAuthorized) {
    memoizedRoutes = memoizedAdminRoutes;
  } else if (isAuthenticated && !isAuthorized) {
    memoizedRoutes = memoizedAuthenticatedRoutes;
  } else {
    memoizedRoutes = memoizedUnauthenticatedRoutes;
  }

  const routes = useMemo(() => memoizedRoutes, [memoizedRoutes]);

  return {
    routes,
    memoizedUnauthenticatedRoutes,
    memoizedUnauthenticatedEndpoints,
    memoizedAuthenticatedRoutes,
    memoizedAuthenticatedEndpoints,
    memoizedAdminRoutes,
    memoizedAdminEndpoints,
  };
};

export default useRoutes;
