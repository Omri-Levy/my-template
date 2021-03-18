import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import useRoutes from '../../../hooks/ui/useRoutes';
import AuthenticationContext
  from '../../../context/AuthenticationContext/AuthenticationContext';
import useIsAdmin from '../../../hooks/useIsAdmin';

/**
 * centralized redirect related logic making use of react hooks and
 * context to ensure correct redirects.
 */
const RedirectHandler = (): JSX.Element | null => {
  // current page
  const { pathname } = useLocation();
  const redirectUrl = `/`;
  const [validRoute, setValidRoute] = useState(true);
  /**
   * avoids redirecting if the redirect url is the same as the current
   * page.
   */
  const shouldRedirect = redirectUrl !== pathname;
  const {
    memoizedUnauthenticatedEndpoints,
    memoizedAuthenticatedEndpoints,
    memoizedAdminEndpoints
  } = useRoutes();
  const isProtectedEndpoint = useMemo(
    () =>
      memoizedAuthenticatedEndpoints.some((memoizedAuthenticatedEndpoint) => {
        if (typeof memoizedAuthenticatedEndpoint !== `string`) {
          return memoizedAuthenticatedEndpoint.test(pathname);
        }

        return memoizedAuthenticatedEndpoint.includes(pathname);
      }),
    [pathname, memoizedAuthenticatedEndpoints]
  );
  const isUnprotectedEndpoint = useMemo(
    () =>
      memoizedUnauthenticatedEndpoints.some(
        (memoizedUnauthenticatedEndpoint) => {
          if (typeof memoizedUnauthenticatedEndpoint !== `string`) {
            return memoizedUnauthenticatedEndpoint.test(pathname);
          }

          return memoizedUnauthenticatedEndpoint.includes(pathname);
        }
      ),
    [pathname, memoizedUnauthenticatedEndpoints]
  );
  const isAdminEndpoint = useMemo(
    () =>
      memoizedAdminEndpoints.some((memoizedAdminEndpoint) => {
        if (typeof memoizedAdminEndpoint !== `string`) {
          return memoizedAdminEndpoint.test(pathname);
        }

        return memoizedAdminEndpoint.includes(pathname);
      }),
    [memoizedAdminEndpoints, pathname]
  );
  const { isAuthenticated } = useContext(AuthenticationContext);
  const isAdmin = useIsAdmin();
  const handleRedirect = useCallback(async () => {
    try {
      /**
       * redirects if the current page does not exist or should not render
       * based on if the user is authenticated or not.
       */
      let isValidRoute;

      if (isAdmin) {
        isValidRoute = isAdminEndpoint;
      } else if (isAuthenticated) {
        isValidRoute = isProtectedEndpoint;
      } else {
        isValidRoute = isUnprotectedEndpoint;
      }

      setValidRoute(isValidRoute);
    } catch (error) {
      console.error(error);
    }
  }, [
    isAdmin,
    isAdminEndpoint,
    isAuthenticated,
    isProtectedEndpoint,
    isUnprotectedEndpoint
  ]);

  useEffect(() => {
    (async () => {
      await handleRedirect();
    })();
  }, [handleRedirect]);

  if (shouldRedirect && !validRoute) {
    return (
        <Redirect to={redirectUrl} />
    );
  }

  return null;
};

export default RedirectHandler;
