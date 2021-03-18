import { IconType } from 'react-icons';
import { InputGroupProps, InputProps } from '@chakra-ui/react';

interface Props extends InputGroupProps {
  icon?: IconType;
  iconColor?: string;
  inputProps: InputProps;
};

export { Props };



