import { User } from '@my-template/shared';
import { GridProps } from '@chakra-ui/react';

type Authenticate = () => Promise<void>;
type ShouldSkipLink = (to: string, currentUser: User | null) => boolean;
interface Props extends GridProps {
  toggleBurgerMenu: () => void;
}

export { Authenticate, ShouldSkipLink, Props };
