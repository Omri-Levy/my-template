import { IconType } from 'react-icons';
import { InputGroupProps, InputProps } from '@chakra-ui/react';
import { ChakraColorScheme } from '../../utils/types';

interface Props extends InputGroupProps {
  icon?: IconType;
  iconColor?: string;
  inputProps: InputProps;
  checkboxColor?: ChakraColorScheme;
}

export { Props };
