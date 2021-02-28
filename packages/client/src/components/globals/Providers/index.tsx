import { ChakraProvider } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import theme from './theme';
import queryClient from './queryClient';
import AuthenticationProvider from '../../../context/Authentication';

const Providers: FunctionComponent = ({ children }) => (
  <ChakraProvider theme={theme}>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>{children}</AuthenticationProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ChakraProvider>
);

export default Providers;
