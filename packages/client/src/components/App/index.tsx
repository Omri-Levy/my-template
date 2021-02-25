import { FunctionComponent } from 'react';
import { Container } from '@chakra-ui/react';
import Routes from '../Routes';

const App: FunctionComponent = () => (
  <Container as='main'>
    <Routes />
  </Container>
);

export default App;
