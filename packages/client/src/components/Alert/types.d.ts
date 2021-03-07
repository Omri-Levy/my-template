import { AlertProps } from '@chakra-ui/react';

interface Props extends AlertProps {
  message: string;
  closeable?: boolean;
  /**
   * requires the full object of Chakra-UI's useDisclosure hook.
   */
  disclosure: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
}

export { Props };
