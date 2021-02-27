import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { IterableUser } from '@my-template/shared';
import fetchCurrentUser from '../../utils/fetchCurrentUser';
import AuthenticationContext from './AuthenticationContext';

const AuthenticationProvider: FunctionComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IterableUser>(null);
  const authenticate = useCallback(async () => {
    let user: IterableUser = `unauthenticated`;

    try {
      user = await fetchCurrentUser();
    } catch (err) {
      console.error(err);
    }

    setCurrentUser(user);
  }, []);

  useEffect(() => {
    (async () => {
      await authenticate();
    })();
  }, [authenticate]);

  return (
    <AuthenticationContext.Provider value={{ currentUser, authenticate }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
