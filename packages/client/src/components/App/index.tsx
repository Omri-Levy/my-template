import { FunctionComponent } from 'react';
import {Container} from '@chakra-ui/react';
import Routes from '../Routes';
import React from 'react';

const App: FunctionComponent = () => (
  <Container as={`main`}>
    <Routes/>
  </Container>
);

export default App;
