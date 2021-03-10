import { IterableUser } from '@my-template/shared';

interface AuthContextType {
  currentUser: IterableUser | null;
  authenticate: () => Promise<void>;
}

export { AuthContextType };
