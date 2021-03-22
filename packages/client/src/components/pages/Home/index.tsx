import { FunctionComponent, useContext } from 'react';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import AuthenticatedHome from './AuthenticatedHome';
import UnauthenticatedHome from './UnauthenticatedHome';

const Home: FunctionComponent = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (isAuthenticated) {
    return <AuthenticatedHome />;
  }

  return <UnauthenticatedHome />;
};

export default Home;
