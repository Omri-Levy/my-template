import { FieldErrors } from 'react-hook-form';
import { FormControlProps, InputProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Register } from '../../../utils/types';

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
  inputProps?: InputProps;
}

export { Props };
