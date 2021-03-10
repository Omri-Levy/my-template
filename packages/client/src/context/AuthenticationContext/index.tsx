import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { IterableUser } from '@my-template/shared';
import fetchCurrentUser from '../../utils/api/fetchCurrentUser';
import AuthenticationContext from './AuthenticationContext';

const AuthenticationProvider: FunctionComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IterableUser>(null);
  const authenticate = useCallback(async () => {
    let user: IterableUser = `unauthenticated`;

    try {
      user = await fetchCurrentUser();
    } catch (error) {
      console.error(error);
    }

    setCurrentUser(user);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await authenticate();
      } catch (error) {
        console.error(error);
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
