import { HeadingProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Disclosure } from '../../utils/types';

type OnClose = () => void;
interface Props {
  icons?: boolean;
  headerIcon?: IconType;
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
  disclosure: Disclosure;
  alertDisclosure: Disclosure;
  errorMessage?: string;
}

export { Props };
