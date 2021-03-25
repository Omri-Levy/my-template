import { HeadingProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type OnClose = () => void;
interface Props {
  toggleButtonText: string;
  headerText: string;
  headingProps: HeadingProps;
  bodyHeadingText: string;
  bodyText: string;
  checkbox?: boolean;
  checkboxText?: string;
  actionIcon?: IconType;
  onClick: (onClose: OnClose) => () => void | Promise<void>;
  isLoading?: boolean;
  actionText: string;
  disclosure: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
  alertDisclosure: {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
  errorMessage?: string;
}

export { Props };
