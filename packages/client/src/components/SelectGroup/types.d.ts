import { IconType } from 'react-icons';
import { InputGroupProps, SelectProps } from '@chakra-ui/react';
import { Register } from '../../utils/types';

interface Props extends InputGroupProps {
  icon?: IconType;
  iconColor?: string;
  selectOptions: (string | number)[] | undefined;
  register?: Register;
  selectProps: SelectProps;
}

export { Props };

