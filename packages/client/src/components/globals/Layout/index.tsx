import { FunctionComponent } from 'react';
import Head from './Head';
import Header from './Header';
import Container from './Container';

const Layout: FunctionComponent = ({ children }) => (
  <>
    <Head />
    <Header />
    <Container>{children}</Container>
  </>
);

export default Layout;
