import { FieldErrors, useForm } from 'react-hook-form';
import { BoxProps } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Children, GetValues } from '../../../utils/types';
import { OnSubmit } from '../../../hooks/useAuthentication/types';

interface Props extends BoxProps {
  errors: FieldErrors;
  getValues: GetValues;
  handleSubmit: typeof useForm.handleSubmit;
  onSubmit: OnSubmit;
  isSubmitting: boolean;
  submitButtonText: string;
  icons?: boolean;
  submitButtonIcon?: IconType;
  children: Children;
}

export { Props };
