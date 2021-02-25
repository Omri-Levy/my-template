import { FunctionComponent } from 'react';
import Head from '../Head';
import Header from '../Header';

const Layout: FunctionComponent = ({ children }) => (
  <>
    <Head />
    <Header />
    {children}
  </>
);
export default Layout;
