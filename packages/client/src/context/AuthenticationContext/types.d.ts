import { User } from '@my-template/shared';

interface AuthenticationContextType {
  currentUser: User | null;
  authenticate: () => Promise<void>;
  isAuthenticated: boolean;
}

export { AuthenticationContextType };
