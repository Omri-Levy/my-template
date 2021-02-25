import { IterableUser } from '@my-template/shared';

type FetchCurrentUser = () => Promise<IterableUser | null>;

export { FetchCurrentUser };
