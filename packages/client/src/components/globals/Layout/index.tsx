import { FunctionComponent, useContext } from 'react';
import Head from './Head';
import Header from './Header';
import Container from './Container';
import Loading from '../Loading';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';
import IdleTimer from '../IdleTimer';

const Layout: FunctionComponent = ({ children }) => {
  const { currentUser, isAuthenticated } = useContext(AuthenticationContext);

  return (
    <>
      {isAuthenticated && <IdleTimer />}
      <Loading suspense={!currentUser} />
      <Head />
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
