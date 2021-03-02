import { SetState } from '../../utils/types';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: SetState<boolean>;
}

export { LoadingContextType };
