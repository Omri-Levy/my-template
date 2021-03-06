import { FieldErrors } from 'react-hook-form';
import { FunctionComponent } from 'react';
import { FormControlProps } from '@chakra-ui/react';
import { Register } from '../../../utils/types';

interface Props extends FormControlProps {
  errors: FieldErrors;
  labelTitle: string;
  type: string;
  name: string;
  icon?: FunctionComponent;
  iconColor?: string;
  register: Register;
  maxLength?: number;
  helperText?: string;
  isSelectField?: boolean;
  selectPlaceholder?: string;
  selectOptions?: string[];
}

export { Props };
