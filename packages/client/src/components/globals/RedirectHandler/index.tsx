import { useCallback, useContext, useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import useRoutes from '../../../hooks/ui/useRoutes';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

/**
 * centralized redirect related logic making use of react hooks and
 * context to ensure correct redirects.
 */
const RedirectHandler = (): JSX.Element | null => {
  const { currentUser } = useContext(AuthenticationContext);
  // current page
  const { pathname } = useLocation();
  const redirectUrl = `/`;
  const [validRoute, setValidRoute] = useState(true);
  /**
   * avoids redirecting if the redirect url is the same as the current
   * page.
   */
  const shouldRedirect = redirectUrl !== pathname;
  const { unprotectedEndpoints, protectedEndpoints } = useRoutes();
  const isProtectedEndpoint = useCallback(
    () =>
      protectedEndpoints.some((protectedEndpoint) => {
        if (typeof protectedEndpoint !== `string`) {
          return protectedEndpoint.test(pathname);
        }

        return protectedEndpoint.includes(pathname);
      }),
    [pathname, protectedEndpoints]
  );
  const isUnprotectedEndpoint = useCallback(
    () =>
      unprotectedEndpoints.some((unprotectedEndpoint) => {
        if (typeof unprotectedEndpoint !== `string`) {
          return unprotectedEndpoint.test(pathname);
        }

        return unprotectedEndpoint.includes(pathname);
      }),
    [pathname, unprotectedEndpoints]
  );
  const handleRedirect = useCallback(async () => {
    try {
      /**
       * redirects if the current page does not exist or should not render
       * based on if the user is authenticated or not.
       */

      if (currentUser && currentUser !== `unauthenticated`) {
        const isValidRoute = isProtectedEndpoint();

        setValidRoute(isValidRoute);
      } else {
        const isValidRoute = isUnprotectedEndpoint();

        setValidRoute(isValidRoute);
      }
    } catch (error) {
      console.error(error);
    }
  }, [isProtectedEndpoint, isUnprotectedEndpoint, currentUser]);

  useEffect(() => {
    (async () => {
      await handleRedirect();
    })();
  }, [handleRedirect]);

  if (shouldRedirect && !validRoute) {
    return <Redirect to={redirectUrl} />;
  }

  return null;
};

export default RedirectHandler;
