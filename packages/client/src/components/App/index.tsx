import { FunctionComponent, Suspense } from 'react';
import { Container } from '@chakra-ui/react';
import Routes from '../Routes';
import Loading from '../Loading';

const App: FunctionComponent = () => (
  <Container as={`main`} height={`100%`}>
    <Suspense fallback={<Loading />}>
      <Routes />
    </Suspense>
  </Container>
);

export default App;
