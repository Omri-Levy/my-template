import { ChakraProvider } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import theme from './theme';
import queryClient from './queryClient';
import AuthenticationProvider from '../../../context/Authentication';
import LoadingProvider from '../../../context/Loading';
import store from '../../../redux/store';

const Providers: FunctionComponent = ({ children }) => (
  <ChakraProvider theme={theme}>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <AuthenticationProvider>
            <LoadingProvider>{children}</LoadingProvider>
          </AuthenticationProvider>
        </ReduxProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ChakraProvider>
);

export default Providers;
