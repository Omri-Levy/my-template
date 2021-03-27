import { AlertProps } from '@chakra-ui/react';
import { Disclosure } from '../../utils/types';

interface Props extends AlertProps {
  message: string;
  closeable?: boolean;
  /**
   * requires the full object of Chakra-UI's useDisclosure hook.
   */
  disclosure: Disclosure;
}

export { Props };
