import { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { IterableUser } from '@my-template/shared';
import fetchCurrentUser from '../../utils/fetchCurrentUser';
import AuthenticationContext from './AuthenticationContext';
import asyncUseEffect from '../../utils/asyncUseEffect';

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
    asyncUseEffect(authenticate);
  }, [authenticate]);

  return (
    <AuthenticationContext.Provider value={{ currentUser, authenticate }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
