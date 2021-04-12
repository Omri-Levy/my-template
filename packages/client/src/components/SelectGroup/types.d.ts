import { IconType } from 'react-icons';
import { InputGroupProps, SelectProps } from '@chakra-ui/react';
import { Register } from '../../utils/types';
import { OptionComponent } from '../Select/Options/Option/types';

interface ExtendedSelectProps extends SelectProps {
  activeColor?: string;
}
interface Props extends InputGroupProps {
  icon?: IconType;
  iconColor?: string;
  selectOptions: (string | number)[] | undefined;
  optionsProps?: OptionComponent;
  register?: Register;
  selectProps: ExtendedSelectProps;
}

export { Props };
