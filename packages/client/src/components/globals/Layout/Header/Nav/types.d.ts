import { IterableUser } from '@my-template/shared';

type Authenticate = () => Promise<void>;
type ShouldSkipLink = (to: string, currentUser: IterableUser) => boolean;

export { Authenticate, ShouldSkipLink };
