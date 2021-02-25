import { Spinner } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const Loading: FunctionComponent = () => (
  <Spinner
    color='black.300'
    fontSize='1.5rem'
    position='fixed'
    bottom={5}
    right={5}
    pointerEvents='none'
    transition='240ms ease'
  />
);

export default Loading;
