import { useContext, useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import AuthenticationContext from '../../../context/Authentication/AuthenticationContext';
import useRoutes from '../../../hooks/useRoutes';
import useSuccessToast from '../../../hooks/useSuccessToast';

/**
 * centralized redirect related logic making use of react hooks and
 * context to ensure correct redirects.
 */
const RedirectHandler = (): JSX.Element | null => {
  const { toast, toastOptions } = useSuccessToast(`Signed in successfully.`);

  // current page
  const { pathname } = useLocation();
  const redirectUrl = `/`;
  const [validRoute, setValidRoute] = useState(true);
  /**
   * avoids redirecting if the redirect url is the same as the current
   * page.
   */
  const shouldRedirect = redirectUrl !== pathname;
  const { currentUser } = useContext(AuthenticationContext);
  const { unprotectedEndpoints, protectedEndpoints } = useRoutes();

  useEffect(() => {
    try {
      /**
       * redirects if the current page does not exist or should not render
       * based on if the user is authenticated or not.
       */
      if (currentUser && currentUser !== `unauthenticated`) {
        const isValidRoute = protectedEndpoints.some((protectedEndpoint) => {
          if (typeof protectedEndpoint !== `string`) {
            return protectedEndpoint.test(pathname);
          }

          return protectedEndpoint.includes(pathname);
        });

        setValidRoute(isValidRoute);
      } else {
        const isValidRoute = unprotectedEndpoints.some(
          (unprotectedEndpoint) => {
            if (typeof unprotectedEndpoint !== `string`) {
              return unprotectedEndpoint.test(pathname);
            }

            return unprotectedEndpoint.includes(pathname);
          }
        );

        setValidRoute(isValidRoute);
      }
    } catch (error) {
      console.error(error);
    }
  }, [pathname, currentUser, protectedEndpoints, unprotectedEndpoints]);

  if (shouldRedirect && !validRoute) {
    return (
      <Redirect
        to={{
          pathname: redirectUrl,
          state: {
            toast: pathname === `/signIn` && toast(toastOptions),
          },
        }}
      />
    );
  }

  return null;
};

export default RedirectHandler;
