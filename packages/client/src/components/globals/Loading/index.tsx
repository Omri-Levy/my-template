import { Spinner, useColorMode } from '@chakra-ui/react';
import { FunctionComponent, memo } from 'react';
import { useIsFetching } from 'react-query';
import { Props } from './types';

const Loading: FunctionComponent<Props> = ({ suspense }) => {
  const isFetching = useIsFetching();
  const { colorMode } = useColorMode();

  if (!isFetching && !suspense) {
    return null;
  }

  const color = colorMode === `dark` ? `white` : `gray.800`;

  return (
    <Spinner
      color={color}
      fontSize={`1.5rem`}
      position={`fixed`}
      bottom={5}
      right={5}
      pointerEvents={`none`}
      transition={`240ms ease`}
    />
  );
};

export default memo(Loading);
