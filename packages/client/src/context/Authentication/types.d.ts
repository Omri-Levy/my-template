import { IterableUser } from '@my-template/shared';

interface AuthContextType {
 currentUser: IterableUser | undefined,
 authenticate: () => Promise<void>;
}

export {AuthContextType};
