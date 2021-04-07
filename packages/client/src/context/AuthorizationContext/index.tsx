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
  const { isAuthenticated } = useContext(AuthenticationContext);
  const authorize = useCallback(async () => {
    setIsAuthorized(isAuthenticated && (await fetchAuthorize()));
  }, [isAuthenticated]);

  useEffect(() => {
    (async () => {
      await authorize();
    })();
  }, [authorize, isAuthenticated]);

  return (
    <AuthorizationContext.Provider value={{ isAuthorized, authorize }}>
      {children}
    </AuthorizationContext.Provider>
  );
};

export default AuthorizationProvider;
