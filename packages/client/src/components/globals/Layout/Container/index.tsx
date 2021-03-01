import { FunctionComponent } from 'react';
import { Container as MainContainer } from '@chakra-ui/react';
import { Props } from './types';

/**
 * a simple wrapper component using Chakra-UI's Container component with the
 * html "main" tag in the "as" prop and height 100%.
 */
const Container: FunctionComponent<Props> = ({ children }) => (
  <MainContainer as={`main`} height={`100%`}>
    {children}
  </MainContainer>
);

export default Container;