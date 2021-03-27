import { FieldErrors } from 'react-hook-form';
import { BoxProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {
  Children,
  FormSubmit,
  GetValues,
  HandleSubmit,
} from '../../../utils/types';

interface Props extends BoxProps {
  errors: FieldErrors;
  getValues: GetValues;
  handleSubmit: HandleSubmit;
  onSubmit: FormSubmit;
  isSubmitting: boolean;
  submitButtonText: string;
  icons?: boolean;
  submitButtonIcon?: IconType;
  children: Children;
  useRecaptcha?: boolean;
}

export { Props };
