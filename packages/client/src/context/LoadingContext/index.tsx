import { FunctionComponent, useContext, useEffect, useState } from 'react';
import LoadingContext from './LoadingContext';
import AuthenticationContext from '../AuthenticationContext/AuthenticationContext';
import Loading from '../../components/globals/Loading';

const LoadingProvider: FunctionComponent = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(AuthenticationContext);

  useEffect(() => {
    if (!currentUser) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [currentUser]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <Loading isLoading={isLoading} />
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
