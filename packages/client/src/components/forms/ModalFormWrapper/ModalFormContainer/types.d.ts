import { IconType } from 'react-icons';
import { ButtonProps } from '@chakra-ui/react';
import { ChakraColorScheme, Disclosure } from '../../../../utils/types';

interface Props {
  icons?: boolean;
  headerIcon?: IconType;
  toggleButtonIcon?: IconType;
  toggleButtonText: string;
  toggleButtonColor?: ChakraColorScheme;
  headerText: string;
  disclosure: Disclosure;
  buttonProps?: ButtonProps;
}

export { Props };
