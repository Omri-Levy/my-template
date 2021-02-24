import AuthenticationContext from './AuthenticationContext';
import React, {
  FunctionComponent,
  Suspense,
  useEffect,
  useMemo,
  useState
} from 'react';
import fetchCurrentUser from '../../utils/fetchCurrentUser';
import { IterableUser } from '@my-template/shared';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';
import authenticatedRoutes from './authenticatedRoutes';
import unauthenticatedRoutes from './unauthenticatedRoutes';

const AuthenticationProvider: FunctionComponent = ({children}) => {
  const [currentUser, setCurrentUser] = useState<IterableUser>();
  const authenticate = async () => setCurrentUser(await fetchCurrentUser());
  const currentPage = useLocation().pathname;
  const [isLoading, setIsLoading] = useState(true);
  const protectedRoutes = useMemo(() => authenticatedRoutes, []);
  const unprotectedRoutes = useMemo(() => unauthenticatedRoutes, []);

  useEffect(() => {
    (async () => {
      try {
        let redirectUrl;
        await authenticate();

        if (!currentUser) {
          redirectUrl = `/signIn`
        } else {
          redirectUrl = '/';
        }

        /*
        redirects if the current page does not exist.
         */
        const validRoute = protectedRoutes.includes(redirectUrl) ||
          unprotectedRoutes.includes(redirectUrl);
        /*
         avoids redirecting if the redirect url is the same as the current
         page or if the route is unprotected. and then redirects as long
         as window.location.href exists. not checking for existence of
         window.location.href can throw errors in places such as build time.
         */
        const shouldRedirect = redirectUrl !== currentPage &&
          !protectedRoutes.includes(currentPage);

        if ((shouldRedirect || !validRoute) && window.location.href) {
            window.location.href = redirectUrl;
        }

      } catch(err) {
        console.error(err);
      }

      setIsLoading(false);
    })();
  }, [currentPage, currentUser, protectedRoutes, unprotectedRoutes]);

  if (isLoading) {
    return (
      <Loading isLoading={isLoading} />
      );
  }

  return (
    <AuthenticationContext.Provider value={{currentUser, authenticate}}>
      <Suspense fallback={<Loading isLoading={isLoading} />}>
    {children}
      </Suspense>
  </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
