import { ChakraProvider } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './theme';
import queryClient from './queryClient';
import AuthenticationProvider from '../../../context/Authentication';
import LoadingProvider from '../../../context/Loading';
import { persistedStore, store } from '../../../redux/store';
import Loading from '../Loading';

const Providers: FunctionComponent = ({ children }) => (
  <ChakraProvider theme={theme}>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <PersistGate
            loading={<Loading isLoading />}
            persistor={persistedStore}
          >
            <AuthenticationProvider>
              <LoadingProvider>{children}</LoadingProvider>
            </AuthenticationProvider>
          </PersistGate>
        </ReduxProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ChakraProvider>
);

export default Providers;
