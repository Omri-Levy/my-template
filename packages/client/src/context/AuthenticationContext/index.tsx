import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { User } from '@my-template/shared';
import AuthenticationContext from './AuthenticationContext';
import fetchAuthenticate from '../../utils/api/fetchAuthenticate';

const AuthenticationProvider: FunctionComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authenticate = useCallback(async () => {
    const user = await fetchAuthenticate();

    setCurrentUser(user);
    setIsAuthenticated(!!user && user !== `unauthenticated`);
  }, []);

  useEffect(() => {
    (async () => {
      await authenticate();
    })();
  }, [authenticate]);

  return (
    <AuthenticationContext.Provider
      value={{ currentUser, authenticate, isAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
