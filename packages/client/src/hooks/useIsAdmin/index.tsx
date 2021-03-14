/**
 * TODO: update description
 */
import { useContext } from 'react';
import { HookReturns } from './types';
import AuthenticationContext from '../../context/AuthenticationContext/AuthenticationContext';
import AuthorizationContext from '../../context/AuthorizationContext/AuthorizationContext';

const useIsAdmin: HookReturns = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  const { isAuthorized } = useContext(AuthorizationContext);

  return isAuthenticated && isAuthorized;
};

export default useIsAdmin;
