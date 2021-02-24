import LoadingContext from './LoadingContext';
import React, {
  FunctionComponent,
  useState
} from 'react';


const LoadingProvider: FunctionComponent = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{isLoading, setIsLoading}}>
    {children}
  </LoadingContext.Provider>
  );
};

export default LoadingProvider;
