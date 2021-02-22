import { FunctionComponent } from 'react';
import { Spinner } from '@chakra-ui/react';
import { useIsFetching } from 'react-query';

const Loading: FunctionComponent = () => {
  const isFetching = useIsFetching();

  return (
    <Spinner
      color={`black.300`}
      fontSize={`1.5rem`}
      position={`fixed`}
      bottom={5}
      right={5}
      pointerEvents={`none`}
      transition={`240ms ease`}
      opacity={isFetching ? 1 : 0}
    />
  );
};

export default Loading;
