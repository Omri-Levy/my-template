import {
  FunctionComponent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AuthorizationContext from './AuthorizationContext';
import AuthenticationContext from '../AuthenticationContext/AuthenticationContext';
import fetchAuthorize from '../../utils/api/fetchAuthorize';

const AuthorizationProvider: FunctionComponent = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | undefined>();
  const authorize = useCallback(async () => {
    setIsAuthorized(await fetchAuthorize());
  }, []);
  const { isAuthenticated } = useContext(AuthenticationContext);

  useEffect(() => {
    (async () => {
      if (isAuthenticated) {
        await authorize();
      }
    })();
  }, [authorize, isAuthenticated]);

  return (
    <AuthorizationContext.Provider value={{ isAuthorized, authorize }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationProvider;
