import { createContext } from 'react';
import { AuthenticationContextType } from './types';

const AuthenticationContext = createContext<AuthenticationContextType>({
  currentUser: null,
  authenticate: () => Promise.resolve(),
  isAuthenticated: false,
});

export default AuthenticationContext;
