import { useContext, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import authenticatedRoutes from './authenticatedRoutes';
import unauthenticatedRoutes from './unauthenticatedRoutes';
import AuthenticationContext from '../../context/Authentication/AuthenticationContext';

const RedirectHandler = (): null => {
  const { currentUser } = useContext(AuthenticationContext);
  const currentPage = useLocation().pathname;
  const protectedRoutes = useMemo(() => authenticatedRoutes, []);
  const unprotectedRoutes = useMemo(() => unauthenticatedRoutes, []);

  useEffect(() => {
    try {
      const redirectUrl = `/`;
      /**
       * redirects if the current page does not exist or should not render
       * based on if the user is authenticated or not.
       */
      let validRoute;

      if (currentUser && currentUser !== `unauthenticated`) {
        validRoute = protectedRoutes.includes(currentPage);
      } else {
        validRoute = unprotectedRoutes.includes(currentPage);
      }
      /**
       * avoids redirecting if the redirect url is the same as the current
       * page. and then redirects as long as window.location.href exists.
       * not checking for existence of window.location.href can throw errors
       * in places such as build time.
       */
      const shouldRedirect = redirectUrl !== currentPage;

      if (shouldRedirect && !validRoute && window.location.href) {
        window.location.href = redirectUrl;
      }
    } catch (err) {
      console.error(err);
    }
  }, [currentPage, currentUser, protectedRoutes, unprotectedRoutes]);

  return null;
};

export default RedirectHandler;
