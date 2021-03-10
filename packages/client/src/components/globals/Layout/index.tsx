import { FunctionComponent, useContext } from 'react';
import Head from './Head';
import Header from './Header';
import Container from './Container';
import Loading from '../Loading';
import AuthenticationContext from '../../../context/AuthenticationContext/AuthenticationContext';

const Layout: FunctionComponent = ({ children }) => {
  const { currentUser } = useContext(AuthenticationContext);

  return (
    <>
      <Loading suspense={!currentUser} />
      <Head />
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
