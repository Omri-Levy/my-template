import { Spinner, useColorMode } from '@chakra-ui/react';
import { FunctionComponent } from 'react';

const Loading: FunctionComponent = () => {
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
    />
  );
};

export default Loading;
