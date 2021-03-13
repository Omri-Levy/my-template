import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { IterableUser } from '@my-template/shared';
import AuthenticationContext from './AuthenticationContext';
import fetchAuthenticate from '../../utils/api/fetchAuthenticate';

const AuthenticationProvider: FunctionComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IterableUser>(null);
  const authenticate = useCallback(async () => {
    const user = await fetchAuthenticate();

    setCurrentUser(user);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await authenticate();
      } catch (error) {
        console.error(error);

        setCurrentUser(`unauthenticated`);
      }
    })();
  }, [authenticate]);

  return (
    <AuthenticationContext.Provider value={{ currentUser, authenticate }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
