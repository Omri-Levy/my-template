import { ChakraProvider } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClientProvider } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './theme';
import queryClient from './queryClient';
import { persistedStore, store } from '../../../redux/store';
import Loading from '../Loading';
import AuthenticationProvider from '../../../context/AuthenticationContext';
import AuthorizationProvider from '../../../context/AuthorizationContext';

const Providers: FunctionComponent = ({ children }) => (
  <ChakraProvider theme={theme}>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>
          <PersistGate
            loading={<Loading suspense />}
            persistor={persistedStore}
          >
            <AuthenticationProvider>
              <AuthorizationProvider>
                {children}
              </AuthorizationProvider>
            </AuthenticationProvider>
          </PersistGate>
        </ReduxProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ChakraProvider>
);

export default Providers;
