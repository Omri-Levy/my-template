import { FieldErrors, useForm } from 'react-hook-form';
import { FunctionComponent } from 'react';
import { FormControlProps } from '@chakra-ui/react';

interface Props extends FormControlProps {
  errors: FieldErrors;
  labelTitle: string;
  type: string;
  name: string;
  icon: FunctionComponent;
  color: string;
  register: useForm.register;
  maxLength?: number;
  helperText?: string;
}

export { Props };
