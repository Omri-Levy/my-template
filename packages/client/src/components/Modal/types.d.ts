import { ButtonProps, HeadingProps, ModalContentProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { ChakraColorScheme, Disclosure } from '../../utils/types';

type OnClose = () => void;
interface Props {
  buttonProps?: ButtonProps;
  icons?: boolean;
  headerIcon?: IconType;
  toggleButtonText: string;
  toggleButtonColor?: ChakraColorScheme;
  headerText?: string;
  headingProps?: HeadingProps;
  modalProps?: ModalContentProps;
  bodyHeadingText?: string;
  bodyText?: string;
  checkbox?: boolean;
  checkboxText?: string;
  actionIcon?: IconType;
  onClick?: (onClose: OnClose) => () => void | Promise<void>;
  isLoading?: boolean;
  actionText?: string;
  disclosure: Disclosure;
  alertDisclosure: Disclosure;
  errorMessage?: string;
}

export { Props };
