import { FunctionComponent } from 'react';
import { Container as MainContainer } from '@chakra-ui/react';
import { Props } from './types';

const Container: FunctionComponent<Props> = ({ children }) => (
  <MainContainer as={`main`} height={`100%`}>
    {children}
  </MainContainer>
);

export default Container;
