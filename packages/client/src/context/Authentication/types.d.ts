import { User } from '../../utils/types';

interface AuthContextType {
 currentUser: User | undefined,
 authenticate: () => Promise<void>;
}

export {AuthContextType};
