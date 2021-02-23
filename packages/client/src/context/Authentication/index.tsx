import AuthenticationContext from './AuthenticationContext';
import { FunctionComponent, useEffect, useState } from 'react';
import fetchCurrentUser from '../../utils/fetchCurrentUser';
import { IterableUser } from '@my-template/shared';

const AuthenticationProvider: FunctionComponent = ({children}) => {
  const [currentUser, setCurrentUser] = useState<IterableUser>();
  const authenticate = async () => setCurrentUser(await fetchCurrentUser());

  useEffect(() => {
    (async () => {
      try {
        await authenticate();
      } catch(err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <AuthenticationContext.Provider value={{currentUser, authenticate}}>
    {children}
  </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
