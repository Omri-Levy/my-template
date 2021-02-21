import AuthenticationContext from './AuthenticationContext';
import { FunctionComponent, useEffect, useState } from 'react';
import fetchCurrentUser from '../../utils/fetchCurrentUser';
import { User } from '../../utils/types';

const AuthenticationProvider: FunctionComponent = ({children}) => {
  const [currentUser, setCurrentUser] = useState<User>();
  const authenticate = async () => setCurrentUser(await fetchCurrentUser());

  useEffect(() => {
    (async () => {
      await authenticate();
    })();
  }, []);

  return (
    <AuthenticationContext.Provider value={{currentUser, authenticate}}>
    {children}
  </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
