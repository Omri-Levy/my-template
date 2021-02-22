import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './theme';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient';
import AuthenticationProvider from '../../context/Authentication';

const Providers: FunctionComponent = ({children}) =>  (
    <ChakraProvider theme={theme}>
      <CSSReset/>
      <Router>
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <AuthenticationProvider>
                {children}
              </AuthenticationProvider>
            </QueryClientProvider>
        </HelmetProvider>
      </Router>
    </ChakraProvider>
);

export default Providers;
