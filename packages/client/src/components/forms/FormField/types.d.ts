import { FieldErrors } from 'react-hook-form';
import { FormControlProps } from '@chakra-ui/react';
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
}

export { Props };
