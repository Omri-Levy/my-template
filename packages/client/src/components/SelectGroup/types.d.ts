import { IconType } from 'react-icons';
import { InputGroupProps, SelectProps } from '@chakra-ui/react';

interface Props extends InputGroupProps {
  icon?: IconType;
  iconColor?: string;
  selectOptions: (string | number)[] | undefined;
  selectProps: SelectProps;
}

export { Props };

