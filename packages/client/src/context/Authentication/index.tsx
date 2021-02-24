import AuthenticationContext from './AuthenticationContext';
import React, { FunctionComponent, Suspense, useEffect, useState } from 'react';
import fetchCurrentUser from '../../utils/fetchCurrentUser';
import { IterableUser } from '@my-template/shared';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/Loading';

const AuthenticationProvider: FunctionComponent = ({children}) => {
  const [currentUser, setCurrentUser] = useState<IterableUser>();
  const authenticate = async () => setCurrentUser(await fetchCurrentUser());
  const currentPage = useLocation().pathname;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await authenticate();
        const shouldRedirect = currentUser && currentPage !== `/` &&
          currentPage !== `/profile`;

        if (shouldRedirect) {
          if (window.location.href) {
            window.location.href = `/`;
          }
        }
      } catch(err) {
        console.error(err);
      }

      setIsLoading(false);
    })();
  }, [currentPage, currentUser]);

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
