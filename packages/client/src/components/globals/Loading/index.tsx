import { Spinner, useColorMode } from '@chakra-ui/react';
import { FunctionComponent, memo } from 'react';
import { useIsFetching } from 'react-query';
import { Props } from './types';

const Loading: FunctionComponent<Props> = ({ suspense }) => {
  const { colorMode } = useColorMode();
  const color = colorMode === `dark` ? `white` : `gray.800`;
  const isFetching = useIsFetching();

  return (
    <Spinner
      color={color}
      fontSize={`1.5rem`}
      position={`fixed`}
      bottom={5}
      right={5}
      pointerEvents={`none`}
      transition={`240ms ease`}
      opacity={isFetching || suspense ? 1 : 0}
    />
  );
};

export default memo(Loading);
