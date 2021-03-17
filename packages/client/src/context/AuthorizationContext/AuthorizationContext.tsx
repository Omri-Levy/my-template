import { createContext } from 'react';
import { AuthorizationContextType } from './types';

const AuthorizationContext = createContext<AuthorizationContextType>({
  isAuthorized: undefined,
  authorize: () => Promise.resolve(),
});

export default AuthorizationContext;
