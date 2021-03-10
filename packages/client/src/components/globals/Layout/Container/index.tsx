import { FunctionComponent, memo } from 'react';
import { Container as MainContainer } from '@chakra-ui/react';
import { ChildrenProps } from '../../../../utils/types';

/**
 * a simple wrapper component using Chakra-UI's Container component with the
 * html "main" tag in the "as" prop.
 */
const Container: FunctionComponent<ChildrenProps> = ({ children }) => (
  <MainContainer as={`main`}>{children}</MainContainer>
);

export default memo(Container);
