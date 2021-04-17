import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { User } from '@my-template/shared';
import AuthenticationContext from './AuthenticationContext';
import fetchAuthenticate from '../../utils/api/fetchAuthenticate';

const AuthenticationProvider: FunctionComponent = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isMounted = useRef(true);
  const authenticate = useCallback(async () => {
    const user: User = await fetchAuthenticate();

    if (isMounted.current) {
      setCurrentUser(user);
      setIsAuthenticated(!!user && user !== `unauthenticated`);
    }
  }, []);

  useEffect(() => {
    (async () => {
      if (isMounted.current) {
        await authenticate();
      }
    })();

    return () => {
      isMounted.current = false;
    };
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
