import { FunctionComponent } from 'react';
import {
  Alert as ChakraAlert,
  AlertDescription,
  AlertIcon,
  CloseButton,
} from '@chakra-ui/react';
import { Props } from './types';

const Alert: FunctionComponent<Props> = ({
  message,
  closeable,
  disclosure,
  ...props
}) => {
  const { isOpen, onClose } = disclosure;

  if (!isOpen) {
    return null;
  }

  return (
    <ChakraAlert {...props}>
      <AlertIcon />
      <AlertDescription mr={2}>{message}</AlertDescription>
      {closeable && (
        <CloseButton
          position={`absolute`}
          right={`8px`}
          top={`8px`}
          onClick={onClose}
        />
      )}
    </ChakraAlert>
  );
};

export default Alert;
