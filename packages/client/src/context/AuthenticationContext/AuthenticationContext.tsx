import { createContext } from 'react';
import { AuthContextType } from './types';

const AuthenticationContext = createContext<AuthContextType>({
  currentUser: null,
  authenticate: () => Promise.resolve(),
});

export default AuthenticationContext;
