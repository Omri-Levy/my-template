import { FunctionComponent } from 'react';
import Head from './Head';
import Header from './Header';
import Container from './Container';
import Loading from '../Loading';

const Layout: FunctionComponent = ({ children }) => (
  <>
    <Loading />
    <Head />
    <Header />
    <Container>{children}</Container>
  </>
);

export default Layout;
