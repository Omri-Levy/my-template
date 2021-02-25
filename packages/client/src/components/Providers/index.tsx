import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import theme from './theme';
import queryClient from './queryClient';
import AuthenticationProvider from '../../context/Authentication';
import LoadingProvider from '../../context/Loading';

const Providers: FunctionComponent = ({ children }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Router>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <LoadingProvider>
            <AuthenticationProvider>{children}</AuthenticationProvider>
          </LoadingProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </Router>
  </ChakraProvider>
);

export default Providers;
