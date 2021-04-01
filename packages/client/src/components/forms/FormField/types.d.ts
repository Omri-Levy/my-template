import { FieldErrors } from 'react-hook-form';
import { FormControlProps, InputProps, SelectProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Register } from '../../../utils/types';
import { OptionComponent } from '../../Select/Options/Option/types';

interface Props extends FormControlProps {
  errors: FieldErrors;
  labelTitle: string;
  type: string;
  name: string;
  icon?: IconType;
  iconColor?: string;
  register: Register;
  maxLength?: number;
  helperText?: string;
  isSelectField?: boolean;
  selectPlaceholder?: string;
  selectOptions?: string[];
  optionsProps?: OptionComponent;
  inputProps?: InputProps;
  selectProps?: SelectProps;
}

export { Props };
