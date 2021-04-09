import { FunctionComponent, memo } from 'react';
import { Container as MainContainer } from '@chakra-ui/react';
import { ChildrenProps } from '../../../../utils/types';

/**
 * a simple wrapper component using Chakra-UI's Container component with the
 * html "main" tag in the "as" prop.
 */
const Container: FunctionComponent<ChildrenProps> = ({ children }) => (
  <MainContainer
    maxWidth={{ base: `unset`, sm: `60ch` }}
    as={`main`}
    height={{ base: `100%`, sm: `unset` }}
  >
    {children}
  </MainContainer>
);

export default memo(Container);
