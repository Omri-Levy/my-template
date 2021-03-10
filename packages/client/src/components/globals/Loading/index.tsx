import { Spinner, useColorMode } from '@chakra-ui/react';
import { FunctionComponent, memo } from 'react';
import { Props } from './types';

const Loading: FunctionComponent<Props> = ({ isLoading }) => {
  const { colorMode } = useColorMode();
  const color = colorMode === `dark` ? `gray.900` : `gray.50`;

  return (
    <Spinner
      color={color}
      fontSize={`1.5rem`}
      position={`fixed`}
      bottom={5}
      right={5}
      pointerEvents={`none`}
      transition={`240ms ease`}
      opacity={isLoading ? 1 : 0}
    />
  );
};

export default memo(Loading);
