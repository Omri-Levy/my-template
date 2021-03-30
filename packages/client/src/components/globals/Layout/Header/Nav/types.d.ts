import { User } from '@my-template/shared';

type Authenticate = () => Promise<void>;
type ShouldSkipLink = (to: string, currentUser: User | null) => boolean;

export { Authenticate, ShouldSkipLink };
