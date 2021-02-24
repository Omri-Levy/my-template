import { createContext } from 'react';
import { LoadingContextType } from './types';

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => true,
});

export default LoadingContext;
