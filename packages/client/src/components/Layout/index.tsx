import { FunctionComponent } from 'react';
import Head from '../Head';
import Header from '../Header';
import Loading from '../Loading';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Head />
      <Header/>
      <Loading/>
      {children}
    </>
  );
};
export default Layout;
