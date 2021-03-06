import { ChakraProvider } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { StateMachineProvider } from 'little-state-machine';
import theme from './theme';
import queryClient from './queryClient';
import AuthenticationProvider from '../../../context/Authentication';
import LoadingProvider from '../../../context/Loading';

const Providers: FunctionComponent = ({ children }) => (
  <ChakraProvider theme={theme}>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <StateMachineProvider>
          <AuthenticationProvider>
            <LoadingProvider>{children}</LoadingProvider>
          </AuthenticationProvider>
        </StateMachineProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ChakraProvider>
);

export default Providers;
