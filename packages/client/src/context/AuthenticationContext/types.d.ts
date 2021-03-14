import { IterableUser } from '@my-template/shared';

interface AuthenticationContextType {
  currentUser: IterableUser;
  authenticate: () => Promise<void>;
  isAuthenticated: boolean;
}

export { AuthenticationContextType };
