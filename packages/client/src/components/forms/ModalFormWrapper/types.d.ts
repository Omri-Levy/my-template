import { IconType } from 'react-icons';
import { ButtonProps } from '@chakra-ui/react';
import { Disclosure } from '../../../utils/types';

interface Props {
  icons?: boolean;
  headerIcon?: IconType;
  toggleButtonIcon?: IconType;
  toggleButtonText: string;
  headerText: string;
  disclosure: Disclosure;
  buttonProps?: ButtonProps;
}

export { Props };
