import { IterableUser } from '@my-template/shared';

interface AuthenticationContextType {
  currentUser: IterableUser | null;
  authenticate: () => Promise<void>;
}

export { AuthenticationContextType };
