import { createContext } from 'react';
import { AuthContextType } from './types';

const AuthenticationContext = createContext<AuthContextType>({
  currentUser: undefined,
  authenticate: () => Promise.resolve(),
});

export default AuthenticationContext;
