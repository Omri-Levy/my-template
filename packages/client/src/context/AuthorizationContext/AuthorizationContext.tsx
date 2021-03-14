import { createContext } from 'react';
import { AuthorizationContextType } from './types';

const AuthorizationContext = createContext<AuthorizationContextType>({
  isAuthorized: false,
  authorize: () => Promise.resolve(),
});

export default AuthorizationContext;
